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

export default function Home({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    "Baloo-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
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
        <View style={{ marginTop: 40, marginLeft: 24 }}>
          <Text style={{ fontSize: 30, fontFamily: "Baloo-Bold" }}>
            Welcome, User!
          </Text>
        </View>
        <View style={styles.goalContainer}>
          <View style={styles.percentage}>
            <Text
              style={{
                fontFamily: "Baloo-ExtraBold",
                fontSize: 40,
                color: "#15476B",
              }}
            >
              32%
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Baloo-Bold",
                fontSize: 20,
                color: "#15476B",
              }}
            >
              My Plans for the day
            </Text>
            <Text
              style={{ fontSize: 13, fontFamily: "Baloo-Regular", top: -3 }}
            >
              2 of 5 goals completed
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.gridContainer}>
            <View style={[styles.gridItem, { backgroundColor: "#FFE0C8" }]}>
              <Image
                style={[styles.gridImage, { width: 45 }]}
                source={require("../images/SunIcon.png")}
              />
              <Text style={[styles.gridTextBig, { color: "#F39B57" }]}>
                2:00 pm
              </Text>
              <Text style={[styles.gridTextSmall, { color: "#F39B57" }]}>
                Make sure to snack!
              </Text>
            </View>
            <View style={[styles.gridItem, { backgroundColor: "#FFCED5" }]}>
              <Image
                style={[styles.gridImage, { height: 39, top: -3 }]}
                source={require("../images/Calendar.png")}
              />
              <Text style={[styles.gridTextBig, { color: "white" }]}>
                Calendar
              </Text>
              <Text style={[styles.gridTextSmall, { color: "#DD5969" }]}>
                4:30 TA office hours
              </Text>
            </View>
          </View>
          <View style={styles.gridContainer}>
            <View style={[styles.gridItem, { backgroundColor: "#7793BD" }]}>
              <Image
                style={styles.gridImage}
                source={require("../images/PencilDrawing.png")}
              />
              <Text style={[styles.gridTextBig, { color: "white" }]}>
                Thoughts
              </Text>
              <Text style={[styles.gridTextSmall, { color: "#FFE6D2" }]}>
                It's time to journal!
              </Text>
            </View>
            <View style={[styles.gridItem, { backgroundColor: "#A0D69C" }]}>
              <Image
                style={[
                  styles.gridImage,
                  { width: 38, height: 42, top: -5, left: -2 },
                ]}
                source={require("../images/Timer.png")}
              />
              <Text style={[styles.gridTextBig, { color: "#44863F" }]}>
                00:10:00
              </Text>
              <Text style={[styles.gridTextSmall, { color: "#44863F" }]}>
                Counting down!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomNavigation}>
          <Image
            style={{ width: 28, height: 25 }}
            source={require("../images/HomeIcon.png")}
          />
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../images/MusicNote.png")}
          />
          <Image
            style={{ width: 29, height: 25 }}
            source={require("../images/HeartIcon.png")}
          />
          <Image
            style={{ width: 29, height: 25 }}
            source={require("../images/ProfileIcon.png")}
          />
        </View>
        {/* <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Sign Out</Text>
        </Pressable> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    width: 279,
    height: 184,
    backgroundColor: "#A2D8FF",
    borderWidth: 5,
    borderColor: "#61B3EE",
    borderRadius: 20,
    marginTop: 6,
    marginLeft: "auto",
    marginRight: "auto",
  },
  percentage: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "#61B3EE",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "dashed",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    marginTop: 20,
  },
  gridItem: {
    width: 164,
    height: 148,
    borderRadius: 20,
    justifyContent: "flex-end",
    paddingTop: 12,
    paddingBottom: 20,
    paddingLeft: 14,
    paddingRight: 11,
  },
  gridTextBig: {
    fontFamily: "Baloo-ExtraBold",
    fontSize: 28,
    top: 8,
  },
  gridTextSmall: {
    fontFamily: "Baloo-Regular",
    fontSize: 16,
  },
  gridImage: {
    width: 42,
    height: 31,
    marginLeft: "auto",
    marginBottom: "auto",
  },
  bottomNavigation: {
    backgroundColor: "#092550",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    width: 328,
    height: 69,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 36,
    paddingRight: 36,
  },
});
