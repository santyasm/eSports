import { View, Text, SafeAreaView, Image, Switch, ScrollView, SectionList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Form/Button';
import { GameCardProps } from '../../components/GameCard';
import { THEME } from '../../theme';
import { SelectList } from 'react-native-dropdown-select-list';
import { GameController } from 'phosphor-react-native';

export function CreateAd() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [games, setGames] = useState<GameCardProps[]>([]);
    const [gameId, setGameId] = useState('');
    const [weekDays, setWeekDays] = useState<string[]>([]);

    function toggleSwitch() {
        setIsEnabled(!isEnabled);
    }

    const data =
        games.map(game => ({
            key: game.id,
            value: game.title
        }))


    useEffect(() => {
        fetch('http://192.168.0.101:4000/games')
            .then(response => response.json())
            .then(data => setGames(data));
    }, [])

    const toggleDay = (day: string) => {
        if (weekDays.includes(day)) {
            // If the day is already selected, remove it from the array
            setWeekDays(weekDays.filter((d) => d !== day));
        } else {
            // If the day is not selected, add it to the array
            setWeekDays([...weekDays, day]);
        }
    };

    console.log(weekDays)

    return (
        <Background>

            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.form}>
                        <Heading
                            title='Publique um anúncio'
                            subtitle='É rápido e fácil!'
                        />


                        <SelectList
                            boxStyles={styles.boxSelect}
                            inputStyles={styles.label}
                            dropdownStyles={{ borderColor: THEME.COLORS.BACKGROUND_800 }}
                            dropdownTextStyles={styles.label}

                            setSelected={(item: any) => setGameId(item)}

                            data={data}
                            placeholder='Selecione o game'
                            save='key'
                        />

                        <Text style={styles.text}>
                            Game: {gameId}
                        </Text>


                        <Input placeholder='Seu nome (ou nickname)' />

                        <Input placeholder='Joga há quantos anos?' keyboardType='numeric' />
                        <Input placeholder='Qual seu discord?' />


                        <Text style={styles.text}>
                            Quando costuma jogar?
                        </Text>
                        <View style={styles.days}>

                            <TouchableOpacity
                                style={weekDays.includes('0') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('0')}
                            >
                                <Text style={styles.text}>D</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('1') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('1')}
                            >
                                <Text style={styles.text}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('2') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('2')}
                            >
                                <Text style={styles.text}>T</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('3') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('3')}
                            >
                                <Text style={styles.text}>Q</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('4') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('4')}
                            >
                                <Text style={styles.text}>Q</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('5') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('5')}
                            >
                                <Text style={styles.text}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={weekDays.includes('6') ? styles.selected : styles.checkbox}
                                onPress={() => toggleDay('6')}
                            >
                                <Text style={styles.text}>S</Text>
                            </TouchableOpacity>
                        </View>

                        <Input keyboardType='numeric' placeholder='Qual horário do dia?' maxLength={5} />

                        <Text style={styles.text}>
                            Costumo me conectar ao chat de voz
                        </Text>

                        <Switch
                            trackColor={{ false: '#76757', true: THEME.COLORS.SUCCESS }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                        <Button >
                            <GameController size={24} color={THEME.COLORS.TEXT} />
                            <Text style={styles.text}>Encontrar duo</Text>
                        </Button>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Background>
    );
}