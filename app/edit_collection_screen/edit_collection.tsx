import React from 'react'
import { View, Text} from 'react-native'
import EditCollectionModule from '@/modules/edit_collection_module/EditCollectionModule'

export default function edit_collection() {
    return (
        <View className='flex flex-col flex-1 justify-between'>
            <View className='p-4 pb-3 border-b border-gray-500 flex flex-row gap-3 items-center'>
                <Text className=' text-2xl font-semibold'>Edit collection</Text>
            </View>
            <EditCollectionModule/>
        </View>
    )
}
