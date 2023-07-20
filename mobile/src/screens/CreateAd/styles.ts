import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form:{
    width: '90%',
    marginTop: 40,
    marginHorizontal: 20,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_700,
    borderRadius: 8,
    overflow: 'hidden'
  },
  text: {
    color: THEME.COLORS.TEXT
  }
});