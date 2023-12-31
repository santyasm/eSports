import { THEME } from '../../theme';
import { styles } from './styles';
import { View, Text, ColorValue } from 'react-native';

interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export function DuoInfo({label, value, colorValue = THEME.COLORS.TEXT}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label} numberOfLines={1}>
                {label}
            </Text>
            <Text style={[styles.value, {color: colorValue}]}>
                {value}
            </Text>
        </View>
    );
} 