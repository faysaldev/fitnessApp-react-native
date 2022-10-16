import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        {/* <StatusBar style="auto" /> */}
        {/* top container */}
        <View style={{}}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            HOME WORKOUT
          </Text>
        </View>

        {/* COUNTABLE TABLE   */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 25,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
              0
            </Text>
            <Text
              style={{ color: "whitesmoke", opacity: 0.8, fontWeight: "700" }}
            >
              WORKOUT
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
              0
            </Text>
            <Text
              style={{ color: "whitesmoke", opacity: 0.8, fontWeight: "700" }}
            >
              KCAL
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
              0
            </Text>
            <Text
              style={{ color: "whitesmoke", opacity: 0.8, fontWeight: "700" }}
            >
              MINUTE
            </Text>
          </View>
        </View>
        {/* calculate portion end */}
        {/* card image */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            elevation: 20,
            shadowColor: "#52006A",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              marginTop: 40,
              borderRadius: 10,
            }}
            source={{
              uri: "https://i.ibb.co/JznVnhz/man-gb4f553c45-640.jpg",
            }}
          />
        </View>
      </View>

      <View
        style={{ marginTop: 90, paddingHorizontal: 20, paddingVertical: 30 }}
      >
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#2889fe",
    height: 200,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
});
