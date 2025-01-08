import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import { ColLevel } from '@/types';

interface Props {
    collectionName: string,
    setCollectionName: React.Dispatch<React.SetStateAction<string>>;
    languages: string,
    setLanguages: React.Dispatch<React.SetStateAction<string>>;
    words: string,
    setWords: React.Dispatch<React.SetStateAction<string>>;
    selectedLevel: string,
    setSelectedLevel: React.Dispatch<React.SetStateAction<ColLevel>>
    maxWordsLength: number
}

export default function CollectionFields(
    {
        collectionName,
        setCollectionName, 
        languages, 
        setLanguages, 
        words, 
        setWords, 
        selectedLevel, 
        setSelectedLevel,
        maxWordsLength
    }: Props) {
    
    const [isMaxWordsLength, setIsMaxWordsLength] = React.useState(false);

    const handleChangeWords = (text: string) => { 
        if (text.length <= maxWordsLength) {
            setIsMaxWordsLength(false);
            setWords(text)
        } else {
            setIsMaxWordsLength(true);
        }
    }

    return (
        <View className='flex-1 p-3 pt-5 flex flex-col gap-6'>
            <View className='flex flex-col gap-1'>
                <Text className='text-xl font-semibold'>Collection name</Text>
                <TextInput
                    placeholder='Collection name'
                    className='border border-gray-500 text-xl rounded-md p-2'
                    value={collectionName}
                    onChangeText={setCollectionName}
                />
            </View>

            <View className='flex flex-col gap-1'>
                <Text className='text-xl font-semibold'>Languages in collection</Text>
                <TextInput
                    placeholder='en, ru ...'
                    className='border border-gray-500 text-xl rounded-md p-2'
                    value={languages}
                    onChangeText={setLanguages}
                />
            </View>

            <View className=' flex flex-col gap-1'>
                <Text className='text-xl font-semibold'>Fill words</Text>
                <TextInput
                    placeholder={`1) word - translation\n2) word - translation, translation2\n3) word - translation (explaination)\n...`}
                    className='border border-gray-500 text-xl rounded-md p-2 h-32'
                    multiline={true}
                    value={words}
                    onChangeText={(text) => handleChangeWords(text)}
                />
                <Text className={isMaxWordsLength ? 'text-red-500' : ''}>{words.length}/{maxWordsLength}</Text>
            </View>
            <View className=' flex flex-col gap-1' >
                <Text className='text-xl font-semibold' >Select level</Text>
                <View className='border border-gray-500 rounded-md'>
                <Picker
                    selectedValue={selectedLevel}
                    onValueChange={(itemValue) => setSelectedLevel(itemValue as ColLevel)}
                >   
                    <Picker.Item label="No level" value="no_level" />
                    <Picker.Item label="A1" value="a1" />
                    <Picker.Item label="A2" value="a2" />
                    <Picker.Item label="B1" value="b1" />
                    <Picker.Item label="B2" value="b2" />
                    <Picker.Item label="C1" value="c1" />
                    <Picker.Item label="C2" value="c2" />
                </Picker>
                </View>
                </View>
        </View>
    )
}
