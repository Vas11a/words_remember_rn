import React from 'react'
import ArrowIcon from '@/assets/ArrowIcon'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

interface Props {
    path : any
}

export default function BackButton({ path }: Props) {
    const router = useRouter();
    return (
        <TouchableOpacity
            className='p-0.5 flex justify-center -rotate-90 items-center border-2 rounded-full border-blue-500'
            onPress={() => router.push(path)}
        >
            <ArrowIcon color='#3b82f6' width={24} height={24}  />
        </TouchableOpacity>
    )
}
