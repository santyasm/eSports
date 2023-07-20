import { View, Text, SafeAreaView } from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import React from 'react';

export function CreateAd() {
    return (
        <Background>

            <SafeAreaView style={styles.container}>
                <Text>Formulário de cadastro de anúncios</Text>
            </SafeAreaView>
        </Background>
    );
}