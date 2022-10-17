import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// import CircularProgress from "react-native-circular-progress-indicator";

const RestScreen = () => {
  const navigation = useNavigation();

  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 6000);
  }, []);

  const timerFn = () => {
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  };
  timerFn();

  return (
    <SafeAreaView style={{ marginTop: 10 }}>
      <Image
        source={{
          uri: "https://media.tenor.com/IRQQfCihUrEAAAAi/%E3%81%8A%E7%96%B2%E3%82%8C%E3%81%95%E3%81%BE-%E4%BC%91%E6%86%A9.gif",
        }}
        style={{
          width: "100%",
          height: 450,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        BREAK for 5s
      </Text>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "900",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {time}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
