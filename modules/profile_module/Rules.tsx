import React from 'react'
import { View } from 'react-native'
import CustomSmallButton from '@/components/CustomSmallButton'
import CustomButton from '@/components/CustomButton'
import BrainIcon from '@/assets/BrainIcon'

export default function Rules() {

  return (
    <View className='flex flex-col justify-center items-center flex-1'>
      <CustomButton 
        text='Rules' 
        color='bg-blue-500' 
        border_color='border-blue-600' 
        fc={() => {}} 
        IconComponent={BrainIcon}/>
    </View>
  )
}
