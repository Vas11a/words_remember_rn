import React from 'react'
import { View, Text} from 'react-native'
import CreateCollectionModule from '@/modules/create_collection_module/CreateCollectionModule'
import BackButton from '@/components/BackButton'

export default function add_collection() {
    return (
        <View className='flex flex-col flex-1 justify-between'>
            <View className='p-4 pb-3 border-b border-gray-500 flex flex-row gap-3 items-center'>
                <Text className=' text-2xl font-semibold'>New collection</Text>
            </View>
            <CreateCollectionModule/>
        </View>
    )
}
