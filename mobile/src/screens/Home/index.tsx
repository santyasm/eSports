import { useEffect, useState } from 'react';
import { Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import logoImg from "../../../assets/logo.png"

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { MagnifyingGlassPlus } from 'phosphor-react-native';
import { THEME } from '../../theme';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl});
  }

  function handleOpenCreatAd() {
    navigation.navigate('createad');
  }

  useEffect(() => {
    fetch('http://192.168.0.103:4000/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..." />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleOpenCreatAd}
        >
          <MagnifyingGlassPlus size={20} color={THEME.COLORS.TEXT} />
          <Text style={styles.buttonTitle}>Publicar anúncio</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}