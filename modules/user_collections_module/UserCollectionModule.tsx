import React, { useEffect } from 'react'
import { View, TextInput, TouchableWithoutFeedback, ScrollView, Text } from 'react-native'
import FindIcon from '@/assets/FindIcon'
import AddNewColButtonn from './AddNewColButtonn';
import { ICollection } from '@/types';
import Collection from './Collection';
import ArrowIcon from '@/assets/ArrowIcon';
import { getCollections, setupDatabase } from '@/database';

export default function UserCollectionModule() {

    const inputRef = React.useRef<TextInput>(null);

    const [isFocused, setIsFocused] = React.useState(false);
    const [userCollections, setUserCollections] = React.useState<ICollection[]>([]);
    const [inputValue, setInputValue] = React.useState('');

    const getUserColleactions = async () => {
        const collections = await getCollections();
        if (collections?.length === 0) {
            console.warn('Коллекции отсутствуют или еще не созданы.');
        }
        return collections;
    };

    const innitialSetupDbAndCollections = async () => {
        await setupDatabase();
        const collections = await getUserColleactions();
        setUserCollections(collections as ICollection[]);
    };
    

    useEffect(() => {
        innitialSetupDbAndCollections();
    }, []);

    const handleContainerPress = () => {
        inputRef.current?.focus();
    };

    return (
        <View className='flex-1 flex p-b-3 pt-5 pb-5 gap-5 relative'>
            <View className='flex-1  flex flex-col gap-5'>
                <TouchableWithoutFeedback onPress={handleContainerPress}>
                    <View
                        className={`flex flex-row mx-3 items-center justify-between gap-2 px-2 py-2.5 ${isFocused ? 'border-blue-500 border-[1.5px]' : 'border-gray-500 border'} rounded-md`}
                    >
                        <FindIcon color='black' width={22} height={22} />
                        <TextInput
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.nativeEvent.text)}
                            placeholder='Search collection...'
                            className=' flex-1 text-lg'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <ScrollView className=' py-4 px-3 h-5' contentContainerStyle={{ flexGrow: 1 }}>
                    {
                        userCollections.map((collection, idx) => {
                            if (collection.name.toLowerCase().includes(inputValue.toLowerCase())) {
                                return (
                                    <Collection key={idx} collectionData={collection} />
                                )    
                            }
                        })
                    }
                    {
                        userCollections.length === 0 && (
                            <View className='flex-1 flex items-center gap-4 justify-center'>
                                <Text className='text-2xl text-gray-500 text-center'>No collections yet</Text>
                                <Text className='text-2xl text-gray-500 text-center'>Add a new collection using the button below</Text>
                                <View className=' -rotate-180'>
                                    <ArrowIcon width={30} height={30} color='#6b7280' />
                                </View>
                            </View>
                        )
                    }
                </ScrollView>

            </View>
            <View className='flex items-center absolute bottom-3 right-5'>
                <AddNewColButtonn />
            </View>
        </View>
    )
}


