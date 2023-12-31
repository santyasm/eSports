import { useState } from "react";
import { Alert } from "react-native";
import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from "phosphor-react-native"
import * as Clipboard from "expo-clipboard";

import { styles } from './styles';
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { ActivityIndicator } from "react-native";

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false);

    async function handleCopyDiscordUserToClipBoard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord);

        Alert.alert('', 'Discord copiado!')
        setIsCopping(false)
    }

    return (
        <Modal
            animationType="fade"
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles
                .container}>
                <View style={styles.content}>

                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>


                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        style={{ alignItems: 'center', marginTop: 24 }}
                        title="Let's play!"
                        subtitle="Agora é só começar a jogar!"
                    />

                    <Text style={styles.label}>
                        Adicione no Discord
                    </Text>

                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordUserToClipBoard}
                        disabled={isCopping}
                        
                    >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}