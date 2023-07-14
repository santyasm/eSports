import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter";

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
});

  return (
    <Background>
      <StatusBar />
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}