import React from 'react'
import CustomSmallButton from '@/components/CustomSmallButton'
import CustomButton from '@/components/CustomButton';
import PlusIcon from '@/assets/PlusIcon'
import { useRouter } from 'expo-router';

export default function AddNewColButtonn() {
    const router = useRouter();

    const navigateTo = (screen: any) => {
        router.push(screen);
    };
    return (
        <CustomSmallButton
            text='Add new '
            color='bg-green-500'
            border_color='border-green-600'
            fc={() => navigateTo('/add_collection_screen/add_collection')}
            IconComponent={PlusIcon}
        />
    )
}
