import { ColLevel } from '@/types'
import React from 'react'
import { View, Text } from 'react-native'

export default function LevelDisplay({ level }: { level: ColLevel }) {
    const getLevelTitle = (level: ColLevel) => {
        switch (level) {
            case 'a1': return 'A1';
            case 'a2': return 'A2';
            case 'b1': return 'B1';
            case 'b2': return 'B2';
            case 'c1': return 'C1';
            case 'c2': return 'C2';
        }
    }

    const getLevelColor = (level: ColLevel) => {
        switch (level) {
            case 'a1': return 'bg-lime-500';
            case 'a2': return 'bg-green-500';
            case 'b1': return 'bg-yellow-500';
            case 'b2': return 'bg-orange-500';
            case 'c1': return 'bg-red-500';
            case 'c2': return 'bg-black';
        }
    }
    
    return (
        <View className={`flex flex-row items-center justify-center px-2 py-0.5 rounded-lg ${getLevelColor(level)} ml-2`}>
            <Text className=' text-white font-semibold'>{getLevelTitle(level)}</Text>
        </View>
    )
}
