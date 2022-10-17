import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import { store } from "./redux/app/store";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Workout"
            options={{ headerShown: false }}
            component={WorkoutScreen}
          />
          <Stack.Screen
            name="Fit"
            options={{ headerShown: false }}
            component={FitScreen}
          />
          <Stack.Screen
            name="Rest"
            options={{ headerShown: false }}
            component={RestScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
