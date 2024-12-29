import React from 'react'
import { View } from 'react-native'
import CollectionFields from '@/components/CollectionFields'
import useStore from '@/store/store';
import SaveIcon from '@/assets/SaveIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import CustomSmallButton from '@/components/CustomSmallButton';
import DeleteIcon from '@/assets/DeleteIcon';
import DeleteCollectionModal from './DeleteCollectionModal';
import { ColLevel } from '@/types';

export default function EditCollectionModule() {

    const { currentCollection } = useStore();
    const router = useRouter();

    React.useEffect(() => {
        if (currentCollection) {
            setCollectionName(currentCollection.name);
            setLanguages(currentCollection.languages);
            setWords(currentCollection.words);
            setSelectedLevel(currentCollection.collection_level);
        }
    }, [currentCollection]);

    const [collectionName, setCollectionName] = React.useState('');
    const [languages, setLanguages] = React.useState('');
    const [words, setWords] = React.useState('');
    const [selectedLevel, setSelectedLevel] = React.useState<ColLevel>("no_level");

    const [isModalVisible, setIsModalVisible] = React.useState(false);


    const handleUpdate = async () => {
        if (!currentCollection) {
            router.push('/');
            return
        }

        const userCollectionsString = await AsyncStorage.getItem("WordsCollections");
        if (!userCollectionsString) {
            router.push('/');
            return
        }

        const userCollections = JSON.parse(userCollectionsString);
        for (let i = 0; i < userCollections.length; i++) {
            if (userCollections[i].id === currentCollection.id) {
                userCollections[i].name = collectionName;
                userCollections[i].languages = languages;
                userCollections[i].best_result = 0;
                userCollections[i].words = words;
                userCollections[i].words_count = words.split('\n').length;
                userCollections[i].collection_level = selectedLevel;
                break
            }
        }

        await AsyncStorage.setItem("WordsCollections", JSON.stringify(userCollections));
        router.push('/');
    }

    const handleDeleteCollection = async () => {
        if (!currentCollection) {
            router.push('/');
            return
        }
        const userCollectionsString = await AsyncStorage.getItem("WordsCollections");
        if (!userCollectionsString) {
            return
        }

        const userCollections = JSON.parse(userCollectionsString);
        for (let i = 0; i < userCollections.length; i++) {
            if (userCollections[i].id === currentCollection.id) {
                userCollections.splice(i, 1);
                break
            }
        }

        await AsyncStorage.setItem("WordsCollections", JSON.stringify(userCollections));
        router.push('/');
    }

    return (
        <>
            <CollectionFields
                collectionName={collectionName}
                setCollectionName={setCollectionName}
                languages={languages}
                setLanguages={setLanguages}
                words={words}
                setWords={setWords}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
            />

            <View className='flex items-center p-3 pb-3 gap-3'>
                <CustomSmallButton
                    text='Update collection'
                    color='bg-green-500'
                    border_color='border-green-600'
                    fc={handleUpdate}
                    IconComponent={SaveIcon}
                />
                <DeleteCollectionModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} fc={handleDeleteCollection} />
                <CustomSmallButton
                    text='Delete collection'
                    color='bg-red-500'
                    border_color='border-red-600'
                    fc={() => setIsModalVisible(true)}
                    IconComponent={DeleteIcon}
                />
            </View>
        </>
    )
}
