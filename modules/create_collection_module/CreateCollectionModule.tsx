import React from 'react'
import { View } from 'react-native'
import SaveIcon from '@/assets/SaveIcon'
import { ColLevel, ICollection } from '@/types'
import { useRouter } from 'expo-router'
import CollectionFields from '@/components/CollectionFields';
import CustomSmallButton from '@/components/CustomSmallButton';
import { addCollection } from '@/database';

export default function CreateCollectionModule() {

    const [collectionName, setCollectionName] = React.useState('');
    const [languages, setLanguages] = React.useState('');
    const [words, setWords] = React.useState('');
    const [selectedLevel, setSelectedLevel] = React.useState<ColLevel>("no_level");
    const maxWordsLength = 1000;

    const router = useRouter();

    const handleSave = async () => { 
        const readyData: ICollection = {
            name: collectionName,
            languages,
            words,
            id: Date.now(),
            words_count: words.split('\n').length,
            best_result: 0,
            collection_level: selectedLevel
        }
        await addCollection(readyData);

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


            <View className='flex items-center p-3 pb-6 gap-3'>
                <CustomSmallButton
                    text='Save collection'
                    color='bg-green-500'
                    border_color='border-green-600'
                    fc={handleSave}
                    IconComponent={SaveIcon}
                />
            </View>
        </>
    )
}
