import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import BackButton from '@/components/BackButton'
import useStore from '@/store/store'
import { useRouter } from 'expo-router'
import PlayModule from '@/modules/play_module/PlayModule'
import { convertor3000 } from '@/utils'

export default function play() {

  const { currentCollection } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!currentCollection) {
      router.push('/');
    }
  }, [currentCollection]);

  return (
    <View className='flex flex-col flex-1'>
      <View className='p-4 pb-3 border-b border-gray-500 flex flex-row gap-3 items-center'>
        <BackButton path='/' />
        <Text className=' text-2xl font-medium'>{currentCollection?.name || ''}</Text>
      </View>
      <PlayModule words={convertor3000(currentCollection?.words || '')} id={currentCollection?.id || -1} notPrepWords={currentCollection?.words || ''} />
    </View>
  )
}
