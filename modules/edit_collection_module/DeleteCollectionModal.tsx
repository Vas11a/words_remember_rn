import React from 'react'
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    fc: () => void
}

export default function DeleteCollectionModal({ isVisible, setIsVisible, fc }: Props) {
    return (
        <Modal isVisible={isVisible}>
            <View className='p-5 bg-white rounded-md border-2 border-gray-500' >
                <Text className='text-xl text-center font-medium'>Are you sure you want to delete this collection?</Text>
                <View className='flex flex-row justify-center gap-4 pt-5'>
                    <TouchableOpacity className='px-3 py-1 border-4  border-gray-500 rounded-md' onPress={() => setIsVisible(false)} >
                        <Text className='text-xl'>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='px-3 py-1 border-4  border-blue-500 rounded-md' onPress={fc} >
                        <Text className='text-xl'>Yes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
