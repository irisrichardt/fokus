import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskList() {
  const tasks = [
    { id: "1", title: "Estudar React Native" },
    { id: "2", title: "Fazer treino" },
    { id: "3", title: "Ler um capítulo do livro" },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 16 }}
      edges={["left", "right"]}
    >
      {/* Espaço para deixar o conteúdo abaixo do header */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 12 }}>
          Minhas Tarefas
        </Text>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 14,
                backgroundColor: "#f0f0f0",
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
