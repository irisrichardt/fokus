import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { IconSave } from "../../components/Icons";

export default function AddTask() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.wrapper}>
            <Text style={styles.title}>Adicionar tarefa</Text>

            <View style={styles.card}>
              <Text style={styles.label}>Em que você está trabalhando?</Text>

              <TextInput
                style={styles.input}
                placeholder="Digite sua tarefa..."
                placeholderTextColor="#8A8A8A"
                multiline
                onStartShouldSetResponder={() => true}
              />

              <FokusButton
                buttonColor="#c9ced1ff"
                title="Salvar"
                icon={<IconSave />}
                outline
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#161A20",
    borderRadius: 16,
    padding: 20,
    gap: 20,
    width: "100%",
  },
  label: {
    color: "#D2D2D2",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#2d3541ff",
    height: 150,
    borderRadius: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    padding: 16,
    color: "#fff",
    textAlignVertical: "top",
  },
});
