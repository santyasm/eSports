import React from 'react';
import { ImageBackground } from 'react-native';
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
} from "@expo-google-fonts/inter";

import backgroundImg from '../../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props {
    children: React.ReactNode
}

export function Background({ children }: Props) {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
    });

    return (
        <ImageBackground style={styles.container}
            source={backgroundImg}
            defaultSource={backgroundImg}
        >
            {children}

        </ImageBackground>
    );
}