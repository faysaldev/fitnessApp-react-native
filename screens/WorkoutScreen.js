import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Image
          source={{ uri: route.params?.image }}
          style={{ width: "100%", height: 200 }}
        />
        <TouchableOpacity style={{ position: "absolute", top: 10, left: 15 }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ color: "white" }}
            name="arrow-back-outline"
            size={25}
            color="black"
          />
        </TouchableOpacity>

        {route.params?.exercise?.map((item, index) => (
          <Pressable
            key={item.id}
            style={{ margin: 15, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ width: 100, height: 90 }}
              source={{ uri: item?.image }}
            />
            {/* text view */}
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  opacity: 0.8,
                  color: "#777",
                }}
              >
                x{item?.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Fit", {
            exercise: route?.params.exercise,
          })
        }
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width: 120,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          START
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
