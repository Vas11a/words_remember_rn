import { View } from 'react-native';
import UserCollectionModule from '@/modules/user_collections_module/UserCollectionModule';


export default function Main_Screen() {

  
  return (
    <View className='flex flex-col flex-1'>
      <UserCollectionModule />
    </View>
  );
}

