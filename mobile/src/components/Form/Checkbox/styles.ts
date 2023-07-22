import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    checkbox: {
        width: 30,
        height: 30,
        margin: 5,
        borderRadius: 4,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected:{
        width: 30,
        height: 30,
        margin: 5,
        borderRadius: 4,
        backgroundColor: THEME.COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: THEME.COLORS.TEXT
    }
});