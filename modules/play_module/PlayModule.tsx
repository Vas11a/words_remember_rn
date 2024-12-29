import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '@/components/CustomButton';
import Result from './Result';
import { convertor3000 } from '@/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  notPrepWords: string;
  words: string[][];
  id: number;
}

export default function PlayModule({ notPrepWords, words, id }: Props) {
  const [isGameFinished, setIsGameFinished] = React.useState(false);
  const [readyArr, setReadyArr] = React.useState<string[][]>([]);
  const [currentWord, setCurrentWord] = React.useState(['Hello', 'привет']);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setReadyArr(words);
    setCurrentWord(JSON.parse(JSON.stringify(words[0])));
  }, []);

  const know = () => {
    if (isGameFinished) return;
    setCount((prev) => prev + 1);
    let resArr = readyArr.filter(
      (e) =>
        !(JSON.stringify(e) === JSON.stringify(currentWord) ||
          JSON.stringify(e) === JSON.stringify([currentWord[1], currentWord[0]]))
    );
    setReadyArr(resArr);
    if (resArr.length === 0) {
      editBestResult(id);
      setIsGameFinished(true);
      return;
    }
    const rand = Math.floor(Math.random() * resArr.length);
    setCurrentWord(JSON.parse(JSON.stringify(resArr[rand])));
  };

  const dontKnow = () => {
    if (isGameFinished) return;
    const rand = Math.floor(Math.random() * readyArr.length);
    setCurrentWord(JSON.parse(JSON.stringify(readyArr[rand])));
    setCount((prev) => prev + 1);
  };

  const refresh = () => {
    setReadyArr(convertor3000(notPrepWords));
    setCurrentWord(JSON.parse(JSON.stringify(words[0])));
    setIsGameFinished(false);
    setCount(0);
  };

  const openCard = () => {
    let firstEl = currentWord[0];
    let secondEl = currentWord[1];
    setCurrentWord([secondEl, firstEl]);
  };

  const editBestResult = async (id: number) => {
    if (id === -1) return;
    const userCollectionsString = await AsyncStorage.getItem("WordsCollections");
    if (!userCollectionsString) return;

    const userCollections = JSON.parse(userCollectionsString);
    for (let i = 0; i < userCollections.length; i++) {
      if (userCollections[i].id === id) {
        console.log(userCollections[i].best_result, +(words.length / (count+1) * 100).toFixed(0));
        
        if (userCollections[i].best_result < +(words.length / (count+1) * 100).toFixed(0)) {
          userCollections[i].best_result = +(words.length / (count+1) * 100).toFixed(0);  
        }
        break
      }
    }
    await AsyncStorage.setItem("WordsCollections", JSON.stringify(userCollections));
  };


  return (
    <View className='p-3 pt-8 flex-1'>
      {isGameFinished ? (
        <Result result={+(words.length / count * 100).toFixed(0)} refresh={refresh} />
      ) : (
        <View className='flex flex-col justify-between flex-1'>
          <TouchableOpacity onPress={openCard} className='flex-1'>
            <View
              className='w-full flex-1 flex justify-center items-center bg-gray-50 p-4 border-2 border-gray-400 rounded-md'
            >
              <Text
                className=' text-center text-2xl'
              >
                {currentWord[0]}
              </Text>
            </View>

          </TouchableOpacity>
          <View className='flex flex-col gap-3 pt-8'>
            <CustomButton
              text='Know'
              fc={know}
              color='bg-green-500'
              extraClasses='w-full justify-center'
              border_color='border-green-700'
            />
            <CustomButton
              fc={dontKnow}
              color='bg-red-500'
              border_color='border-red-700'
              extraClasses='w-full justify-center'
              text='Dont know'
            />
          </View>
        </View>
      )}
    </View>
  );
}
