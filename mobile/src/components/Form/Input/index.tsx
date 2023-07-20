import { TextInput, View, TextInputProps } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../../theme';

export function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={THEME.COLORS.CAPTION_300}
    />
  );
}