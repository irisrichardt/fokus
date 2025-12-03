import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
            <Pressable
              key={p.id}
              style={timerType.id === p.id ? styles.contextButtonActive : null}
              onPress={() => setTimerType(p)}
            >
              <Text style={styles.contextButtonText}>
                {p.display}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={[styles.button, { backgroundColor: timerType.buttonColor }]}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
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
    padding: 20, // Altere o valor conforme necessário
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350, // Tamanho da imagem ajustável
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
    alignItems: "center"
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#fff",
    padding: 10,
  },
  timer: {
    fontSize: 50,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    //backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#021123",
    textAlign: "center",
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
