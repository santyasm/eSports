import { View, Text, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import React from 'react';
import { TextInput } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Form/Button';

export function CreateAd() {
    return (
        <Background>

            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <Heading
                        title='Publique um anúncio'
                        subtitle='É rápido e fácil!'
                    />
                    <Input placeholder='Qual o game?' />
                    <Input placeholder='Seu nome (ou nickname)' />

                    <Input placeholder='Joga há quantos anos?' />
                    <Input placeholder='Qual seu discord?' />


                    <Button>
                        <Text style={styles.text}>Publicar</Text>
                    </Button>
                </View>
            </SafeAreaView>
        </Background>
    );
}