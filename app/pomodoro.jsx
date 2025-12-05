import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro.png"),
    display: "Foco",
    buttonColor: "#B872FF",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/short.png"),
    display: "Pausa curta",
    buttonColor: "#02CDA1",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/long.png"),
    display: "Pausa longa",
    buttonColor: "#BC2E59",
  },
];

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);
    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={timerType.image} style={styles.image} />
      </View>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          buttonColor={timerType.buttonColor}
          onPress={toggleTimer}
          title={timerRunning ? "Pausar" : "Começar"}
        />
      </View>
      <Footer />
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
    width: "85%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-evenly;",
    alignItems: "center",
    width: "100%",
  },
});
