import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 20,
    backgroundColor: THEME.COLORS.PRIMARY,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  }
});