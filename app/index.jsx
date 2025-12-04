import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png'),
    display: 'Foco',
    buttonColor: '#B872FF'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png'),
    display: 'Pausa curta',
    buttonColor: '#02CDA1'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png'),
    display: 'Pausa longa',
    buttonColor: '#BC2E59'
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[1]);

  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        <Image source={timerType.image} style={styles.image} />
      </View>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue} />
        <FokusButton buttonColor={timerType.buttonColor} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido no treinamento de React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  imageContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  },
})
