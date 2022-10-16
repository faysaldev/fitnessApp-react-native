import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route?.params.exercise;
  const currentExersice = exercises[index];

  return (
    <SafeAreaView>
      {/* <StatusBar style="auto" /> */}
      <Image
        source={{ uri: currentExersice?.image }}
        style={{ width: "100%", height: 370, resizeMode: "cover" }}
      />
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 30, fontSize: 30, fontWeight: "bold" }}>
          {currentExersice?.name}
        </Text>
        <Text style={{ marginTop: 30, fontSize: 40, fontWeight: "bold" }}>
          x{currentExersice?.sets}
        </Text>
      </View>

      {index + 1 >= exercises.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "blue",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
            width: 120,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            DONE
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 3000);
            }}
            style={{
              backgroundColor: "blue",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginVertical: 20,
              width: 120,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              DONE
            </Text>
          </TouchableOpacity>

          {/* prev and skip button */}
        </>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "70%",
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => setIndex(index - 1)}
          style={{
            backgroundColor: "#036c01",
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
            }}
          >
            PREV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            index + 1 >= exercises.length
              ? navigation.navigate("Home")
              : setIndex(index + 1)
          }
          style={{
            backgroundColor: "#036c01",
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
            }}
          >
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
