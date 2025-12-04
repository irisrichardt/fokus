import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ buttonColor = '#706767ff', onPress, title, icon }) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 32,
    padding: 8,
    gap: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  }
})