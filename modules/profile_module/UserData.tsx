import React from 'react'
import { View, Text } from 'react-native'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserIcon from '@/assets/UserIcon';

export default function UserData() {

    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        const fetchOrGenerateUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem("username_words");
                if (storedUsername) {
                    setUsername(storedUsername);
                } else {
                    const currentUnixTime = Date.now().toString();
                    const newUsername = `User_${currentUnixTime}`;
                    await AsyncStorage.setItem("username_words", newUsername);
                    setUsername(newUsername);
                }
            } catch (error) {
                console.error("Error fetching or generating username:", error);
            }
        };
        fetchOrGenerateUsername();
    }, []);

    return (
        <View className='p-4 pb-3 border-b border-gray-500 flex flex-row gap-3 items-center'>
            <UserIcon color='black' width={24} height={24} />
            <Text className=' text-2xl font-medium'>{username}</Text>
        </View>
    )
}
