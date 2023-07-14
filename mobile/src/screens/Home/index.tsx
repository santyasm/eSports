import { View, Image } from 'react-native';

import logoImg from "../../../assets/logo.png"

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..." />

      <GameCard
        data={
          GAMES[0]
        }
      />
    </View>
  );
}