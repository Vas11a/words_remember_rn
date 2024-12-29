// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import CustomButton from '@/components/CustomButton';
// import Result from './Result';
// import { convertor3000 } from '@/utils';
// import {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
// import Animated from 'react-native-reanimated';

// interface Props {
//   notPrepWords: string;
//   words: string[][];
// }

// export default function PlayModuleUpdate({ notPrepWords, words }: Props) {
//   const [isGameFinished, setIsGameFinished] = React.useState(false);
//   const [readyArr, setReadyArr] = React.useState<string[][]>([]);
//   const [currentWord, setCurrentWord] = React.useState(['Hello', 'привет']);
//   const [count, setCount] = React.useState(0);

//   let rotateY = useSharedValue(0);

//   React.useEffect(() => {
//     setReadyArr(words);
//     setCurrentWord(JSON.parse(JSON.stringify(words[0])));
//   }, []);

//   const know = () => {
//     if (isGameFinished) return;
//     setCount((prev) => prev + 1);
//     let resArr = readyArr.filter(
//       (e) =>
//         !(JSON.stringify(e) === JSON.stringify(currentWord) ||
//           JSON.stringify(e) === JSON.stringify([currentWord[1], currentWord[0]]))
//     );
//     setReadyArr(resArr);
//     if (resArr.length === 0) {
//       setIsGameFinished(true);
//       return;
//     }
//     const rand = Math.floor(Math.random() * resArr.length);
//     setCurrentWord(JSON.parse(JSON.stringify(resArr[rand])));
//     rotateY.value = withTiming(0, { duration: 0 })
//   };

//   const dontKnow = () => {
//     if (isGameFinished) return;
//     if (readyArr.length === 0) {
//       setIsGameFinished(true);
//       return;
//     }
//     const rand = Math.floor(Math.random() * readyArr.length);
//     setCurrentWord(JSON.parse(JSON.stringify(readyArr[rand])));
//     setCount((prev) => prev + 1);
//     rotateY.value = withTiming(0, { duration: 0 })
//   };

//   const refresh = () => {
//     setReadyArr(convertor3000(notPrepWords));
//     setCurrentWord(JSON.parse(JSON.stringify(words[0])));
//     setIsGameFinished(false);
//     setCount(0);
//   };

//   const openCard = () => {
//     rotateY.value = withTiming(rotateY.value === 0 ? 180 : 0, { duration: 600 });
//     setTimeout(() => {
//       let firstEl = currentWord[0];
//       let secondEl = currentWord[1];
//       setCurrentWord([secondEl, firstEl]);
//     }, 350);
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ rotateY: `${rotateY.value}deg` }],
//   }));


//   return (
//     <View className='p-3 pt-10'>
//       {isGameFinished ? (
//         <Result result={+(words.length / count * 100).toFixed(0)} refresh={refresh} />
//       ) : (
//         <>
//           <TouchableOpacity onPress={openCard} className='w-full min-h-56 h-2/3'>
//             <Animated.View
//               style={[
//                 animatedStyle,
//                 {
//                   width: '100%',
//                   height: '100%',
//                   borderWidth: 2,
//                   borderRadius: 8,
//                   backgroundColor: '#f9fafb',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderColor: '#9ca3af',
//                   padding: 8,
//                 },
//               ]}
//             >
//               <Animated.Text
//                 style={[
//                     animatedStyle,
//                   {
//                     textAlign: 'center',
//                     fontSize: 24,
//                   },
//                 ]}
//               >
//                 {currentWord[0]}
//               </Animated.Text>
//             </Animated.View>

//           </TouchableOpacity>
//           <View className='flex flex-col gap-3 pt-10'>
//             <CustomButton
//               text='Know'
//               fc={know}
//               color='bg-green-500'
//               extraClasses='w-full justify-center'
//               border_color='border-green-700'
//             />
//             <CustomButton
//               fc={dontKnow}
//               color='bg-red-500'
//               border_color='border-red-700'
//               extraClasses='w-full justify-center'
//               text='Dont know'
//             />
//           </View>
//         </>
//       )}
//     </View>
//   );
// }
