import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    backgroundColor: THEME.COLORS.PRIMARY,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  }
});