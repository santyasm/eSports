import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, Switch, ScrollView, SectionList, TouchableOpacity, Pressable, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Entypo } from "@expo/vector-icons";
import { Background } from '../../components/Background';
import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Form/Button';
import { GameCardProps } from '../../components/GameCard';
import { THEME } from '../../theme';
import { SelectList } from 'react-native-dropdown-select-list';
import { GameController } from 'phosphor-react-native';

export function CreateAd() {
    const navigation = useNavigation();
    const [isCreating, setIsCreating] = useState(false);
    const [games, setGames] = useState<GameCardProps[]>([]);

    const [gameId, setGameId] = useState('');
    const [name, setName] = useState('');
    const [discord, setDiscord] = useState('');
    const [yearsPlaying, setYearsPlaying] = useState('');
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [hourStart, setHourStart] = useState('');
    const [hourEnd, setHourEnd] = useState('');
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);


    function handleGoBack() {
        navigation.goBack();
    }

    function handleChangeText(inputText: string) {
        const numericValue = inputText.replace(/\D/g, '');

        const formattedTime = numericValue
            .replace(/^(\d{2})/, '$1:')
            .replace(/^(.{5})(.*)/, '$1');

        return formattedTime;
    }

    function handleChangeHourStart(inputText: string) {
        const hourStartFormatted = handleChangeText(inputText);
        setHourStart(hourStartFormatted)
    }

    function handleChangeHourEnd(inputText: string) {
        const hourEndFormatted = handleChangeText(inputText);
        setHourEnd(hourEndFormatted)
    }

    function toggleSwitch() {
        setUseVoiceChannel(!useVoiceChannel);
    }

    const data =
        games.map(game => ({
            key: game.id,
            value: game.title
        }))

    useEffect(() => {
        axios('http://192.168.0.103:4000/games')
            .then(response => setGames(response.data));
    }, [])

    async function handleCreateAd() {

        try {
            setIsCreating(true)
            await axios.post(`http://192.168.0.103:4000/games/${gameId}/ads`, {
                "name": name,
                "discord": discord,
                "yearsPlaying": Number(yearsPlaying),
                "weekDays": weekDays.map(Number),
                "hourStart": hourStart,
                "hourEnd": hourEnd,
                "useVoiceChannel": useVoiceChannel
            })

            setIsCreating(false)
            alert("Anúncio criado com sucesso!")
            handleGoBack();
        } catch (error) {
            console.log(error)
        }
    }

    const toggleDay = (day: string) => {
        if (weekDays.includes(day)) {
            // If the day is already selected, remove it from the array
            setWeekDays(weekDays.filter((d) => d !== day));
        } else {
            // If the day is not selected, add it to the array
            setWeekDays([...weekDays, day]);
        }
    };

    return (
        <Background>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.form}>

                            <TouchableOpacity onPress={handleGoBack}
                            style={styles.arrowBack}
                            >
                                <Entypo
                                    name='chevron-thin-left'
                                    color={THEME.COLORS.CAPTION_300}
                                    size={20}
                                />
                            </TouchableOpacity>

                            <Heading
                                title='Publique um anúncio'
                                subtitle=''
                            />

                            <View style={styles.hours}>
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

                                <TextInput
                                    style={styles.inputYearsPlaying}
                                    placeholder='Anos jogando'
                                    keyboardType='numeric' placeholderTextColor={THEME.COLORS.CAPTION_300}
                                    value={yearsPlaying}
                                    onChangeText={setYearsPlaying}
                                />

                            </View>

                            <Input
                                value={name}
                                onChangeText={setName}
                                placeholder='Seu nome (ou nickname)'
                            />

                            <Input placeholder='Qual seu discord?'
                                onChangeText={setDiscord}
                                value={discord}
                            />


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


                            <Text style={styles.text}>Qual horário do dia?</Text>
                            <View style={styles.hours}>
                                <Text style={styles.text}>De</Text>
                                <TextInput
                                    style={styles.inputHour}
                                    keyboardType='numeric'
                                    maxLength={5}
                                    onChangeText={handleChangeHourStart}
                                    value={hourStart}
                                    placeholder='hh:mm'
                                    placeholderTextColor={THEME.COLORS.CAPTION_300}
                                />
                                <Text style={styles.text}>até</Text>
                                <TextInput
                                    style={styles.inputHour}
                                    keyboardType='numeric'
                                    maxLength={5}
                                    onChangeText={handleChangeHourEnd}
                                    value={hourEnd}
                                    placeholderTextColor={THEME.COLORS.CAPTION_300}
                                    placeholder='hh:mm'
                                />
                            </View>

                            <Text style={styles.text}>
                                Costumo me conectar ao chat de voz
                            </Text>

                            <Switch
                                trackColor={{ false: '#76757', true: THEME.COLORS.SUCCESS }}
                                onValueChange={toggleSwitch}
                                value={useVoiceChannel}
                            />

                            <Button onPress={handleCreateAd}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    {isCreating ? (
                                        <ActivityIndicator color={THEME.COLORS.TEXT} />
                                    ) : (
                                        <GameController size={24} color={THEME.COLORS.TEXT} />
                                    )}
                                    <Text style={styles.text}>Encontrar duo</Text>
                                </View>

                            </Button>

                        </View>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        </Background>
    );
}