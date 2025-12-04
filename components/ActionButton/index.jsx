import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {
    return (
        <Pressable
            style={[
                styles.contextButton,
                active && styles.contextButtonActive
            ]}
            onPress={onPress}
        >
            <Text 
                style={styles.contextButtonText} 
            >
                {display}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 4,
        marginHorizontal: 4,
        flex: 1
    },
    contextButtonActive: {
        backgroundColor: '#144480',
    },
    contextButtonText: {
        fontSize: 12.5,
        color: '#FFF',
        textAlign: 'center',
    }
})