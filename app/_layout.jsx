import { Ionicons } from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#021123",
          },
          headerTintColor: "#FFF",
          drawerStyle: {
            backgroundColor: "#021123",
          },
          drawerLabelStyle: {
            color: "#FFF",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Início",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="pomodoro"
          options={{
            headerShown: true,
            drawerLabel: "Timer",
            title: "",
          }}
        />

        <Drawer.Screen
          name="add-task/index"
          options={{
            headerShown: true,
            title: "",
            drawerItemStyle: {
              display: "none",
            },
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#FFF"}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate("/tasks")}
                />
              );
            },
          }}
        />

        <Drawer.Screen
          name="tasks/index"
          options={{
            headerShown: true,
            drawerLabel: "Lista de tarefas",
            title: "",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
