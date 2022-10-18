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

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FitnessCards from "../components/FitnessCards";
import { useSelector } from "react-redux";
import {
  intialCompleted,
  intialCal,
  intialWorkout,
  intialmunite,
  selectCal,
  selectCompleted,
  selectMunite,
  selectWorkout,
} from "../redux/freatures/appSclice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import FitnessData from "../data/fitnessData";

const HomeScreen = () => {
  const workout = useSelector(selectWorkout);
  const cal = useSelector(selectCal);
  const munite = useSelector(selectMunite);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // fetch date to locastorage
  const completeWorkout = useSelector(selectCompleted);
  const setLocalStorage = {
    completed: completeWorkout,
    workout,
    cal,
    munite,
  };

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("@workoutData");
      const jsonvalue = JSON.parse(value);
      if (value !== null) {
        dispatch(intialCompleted(jsonvalue?.completed));
        dispatch(intialCal(jsonvalue?.cal));
        dispatch(intialWorkout(jsonvalue?.workout));
        dispatch(intialmunite(jsonvalue?.munite));
      }
    };

    getData();
    return async () => {
      try {
        const jsonValue = JSON.stringify(setLocalStorage);
        await AsyncStorage.setItem("@workoutData", jsonValue);
      } catch (e) {
        onsole.log("There was an error");
      }
    };
  }, []);

  // for go to the workout screen
  const [sound, setSound] = useState();

  const playSound = async () => {
    let sc = "../assets/audio/ready.mp3";
    const { sound } = await Audio.Sound.createAsync(require(sc));
    setSound(sound);
    await sound.playAsync();
  };

  const clickHandler = (item) => {
    navigation.navigate("Workout", {
      image: item?.image,
      exercise: item?.excersises,
      id: item?.id,
    });
    playSound();
  };

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
              {workout}
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
              {cal > 1000 ? cal / 1000 : Math.floor(cal)}
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
              {munite > 60 ? munite / 60 : munite}
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

          <TouchableOpacity
            onPress={() => clickHandler(FitnessData[0])}
            style={{
              backgroundColor: "#2888fe",
              position: "absolute",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginVertical: 20,
              width: 120,
              borderRadius: 6,
              bottom: -20,
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
        </View>
      </View>

      <View
        style={{ marginTop: 90, paddingHorizontal: 20, paddingVertical: 30 }}
      >
        <FitnessCards clickHandler={clickHandler} />
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
    marginTop: 30,
  },
});
