import React from 'react'
import { View, Text } from 'react-native'
import CustomSmallButton from '@/components/CustomSmallButton'
import RefreshIcon from '@/assets/RefreshIcon'

export default function Result({ result, refresh }: { result: number, refresh: () => void }) {
  const getColorForBestResult = (num: number) => {
    if (num === 0) {
      return 'text-gray-500';
    } else if (num > 75) {
      return 'text-green-500';
    } else if (num > 50) {
      return 'text-blue-500';
    } else if (num > 30) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  }
  return (
    <View className=' h-full flex flex-col justify-center -mt-10 gap-5 items-center'>
      <Text className='text-center text-3xl font-medium'>Success! Your Result is:</Text>
      <Text
        className={`text-center text-4xl ${getColorForBestResult(result)} font-medium`}
      >{result}%</Text>
      <CustomSmallButton
        text='Play again'
        fc={refresh}
        color='bg-blue-500'
        border_color='border-blue-700'
        IconComponent={RefreshIcon}
      />
    </View>
  )
}
