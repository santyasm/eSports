import { useEffect, useState } from 'react';
import { FlatList, Image, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";

import logoImg from '../../../assets/logo.png';

import { Background } from '../../components/Background';
import { THEME } from '../../theme';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  function handleGoBack() {
    navigation.goBack();
  };

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.101:4000/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.0.101:4000/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

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
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              onConnect={() => getDiscordUser(item.id)}
              data={item}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />

      </SafeAreaView>
    </Background>
  );
}