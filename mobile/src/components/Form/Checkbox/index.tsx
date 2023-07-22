import { Text, Touchable, TouchableOpacity, TouchableOpacityProps, View, Switch } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

export function Checkbox(props: TouchableOpacityProps) {
    const [selected, setSelected]  = useState(false);

    function handleSelectCheckBox(){
        setSelected(!selected);
    }

    return (
        <TouchableOpacity
            style={selected ? styles.selected : styles.checkbox}
            {...props}
            onPress={handleSelectCheckBox}
        >

        </TouchableOpacity>
    );
}