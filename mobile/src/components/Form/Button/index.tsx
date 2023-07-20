import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

export function Button(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...props}
        >

        </TouchableOpacity>
    );
}