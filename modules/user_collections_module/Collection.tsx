import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import EditIcon from '@/assets/EditIcon'
import { ICollection } from '@/types'
import { makeStringShort } from '@/utils'
import useStore from '@/store/store'
import { useRouter } from 'expo-router'
import LevelDisplay from './LevelDisplay'

export default function Collection({ collectionData }: { collectionData: ICollection }) {
    const { setCurrentCollection } = useStore();
    const getColorForBestResult = (num: number) => {
        if (num === 0) {
            return 'text-gray-500';
        } else if (num > 75) {
            return 'text-green-500';
        } else if(num > 50) {
            return 'text-blue-500';
        } else if (num > 30) {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    }

    const router = useRouter();

    const handleEditCollection = () => {
        setCurrentCollection(collectionData);
        router.push('/edit_collection_screen/edit_collection');
    }

    const handlePlay = () => {
        setCurrentCollection(collectionData);
        router.push('/play_screen/play');
    }
    return (
        <TouchableOpacity onPress={handlePlay} className='flex flex-row gap-2 mb-4'>
            <View className='px-2 py-1 flex-1 border flex flex-col justify-around border-gray-500 rounded-md'>
                <View className='flex flex-row items-center'>
                    <Text className='text-xl font-medium'>
                        {(makeStringShort(collectionData.name, 20))}
                    </Text>
                    {
                        collectionData.collection_level !== 'no_level' && <LevelDisplay level={collectionData.collection_level} /> 
                    }
                    
                </View>
                <View className='flex flex-row gap-3 items-center'>
                    <Text className=' text-gray-500 text-lg font-normal'>{collectionData.words_count} words,</Text>
                    <Text className='text-lg text-gray-500' >({makeStringShort(collectionData.languages, 14)})</Text>
                </View>
                <View className='flex flex-row gap-3 items-center'>
                    <Text className='text-lg text-gray-500' >Best result:
                        <Text className={getColorForBestResult(collectionData.best_result)}> {collectionData.best_result}%</Text>
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleEditCollection} className=' w-16 bg-blue-500 flex flex-col  justify-center items-center rounded-md'>
                <View>
                    <EditIcon color='white' width={22} height={22} />
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
