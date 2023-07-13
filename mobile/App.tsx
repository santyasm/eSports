import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar 
      />
    </Background>
  );
}
