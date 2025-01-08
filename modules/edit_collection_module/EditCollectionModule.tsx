import React from 'react'
import { View } from 'react-native'
import CollectionFields from '@/components/CollectionFields'
import useStore from '@/store/store';
import SaveIcon from '@/assets/SaveIcon';
import { useRouter } from 'expo-router';
import CustomSmallButton from '@/components/CustomSmallButton';
import DeleteIcon from '@/assets/DeleteIcon';
import DeleteCollectionModal from './DeleteCollectionModal';
import { ColLevel } from '@/types';
import { deleteCollection, updateCollection } from '@/database';

export default function EditCollectionModule() {

    const { currentCollection } = useStore();
    const router = useRouter();

    React.useEffect(() => {
        if (currentCollection) {
            console.log(currentCollection);
            const jsonString = JSON.stringify(currentCollection);
            console.log(jsonString);
            

            
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

        const updatedCollection = {
            id: currentCollection.id,
            name: collectionName,
            languages,
            words,
            words_count: words.split('\n').length,
            best_result: 0,
            collection_level: selectedLevel
        };
        await updateCollection(updatedCollection);
        router.push('/');
    }

    const handleDeleteCollection = async () => {
        if (!currentCollection) {
            router.push('/');
            return
        }
        await deleteCollection(currentCollection.id);
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
                maxWordsLength={5000}
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
