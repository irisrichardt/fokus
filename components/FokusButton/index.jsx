import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ buttonColor = '#706767ff' }) => {
    return (
        <Pressable style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>
                Começar
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  }
})
