import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

export default function ActivityTimer() {
  const [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    "Baloo-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ height: "100%" }}>
      <Image
        style={{ position: "absolute", width: "100%", height: "100%" }}
        source={require("../images/HomePage.png")}
      />
      <SafeAreaView>
        <View style={styles.timerContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.timerFontStyle}>00</Text>
            <Text style={styles.timerFontStyle}>:</Text>
            <Text style={styles.timerFontStyle}>00</Text>
            <Text style={styles.timerFontStyle}>:</Text>
            <Text style={styles.timerFontStyle}>00</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              top: -10,
            }}
          >
            <Text style={styles.timerSmallText}>hours</Text>
            <Text style={styles.timerSmallText}>minutes</Text>
            <Text style={styles.timerSmallText}>seconds</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    width: 363,
    height: 156,
    backgroundColor: "#B8F1B4",
    borderColor: "#8DC180",
    borderWidth: 4,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    paddingLeft: 34,
    paddingRight: 34,
  },
  timerFontStyle: {
    fontSize: 50,
    fontFamily: "Baloo-SemiBold",
    color: "#1D4871",
  },
  timerSmallText: {
    fontSize: 14,
    color: "#1D4871",
    fontFamily: "Baloo-Medium",
  },
});
