import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons"

import logoImg from '../../../assets/logo.png'

import { Background } from '../../components/Background';
import { THEME } from '../../theme';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack(){
    navigation.goBack();
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.rigth} />
        </View>

        <Image 
          source={{uri: game.bannerUrl}}
          style={styles.cover}
        />

        <Heading
          title={game.title}
          subtitle='Hora de jogar'
        />
      </SafeAreaView>
    </Background>
  );
}