import { useState, useEffect } from "react";
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

export default function ActivityTimer({ navigation }) {
  const [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    "Baloo-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
  });
  const [minutes, setMinutes] = useState(13);
  const [seconds, setSeconds] = useState(26);

  useEffect(() => {
    setTimeout(() => {
      if (seconds === 0) {
        setSeconds((seconds) => 59);
        setMinutes((minutes) => minutes - 1);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ height: "100%" }}>
      <Image
        style={{ position: "absolute", width: "100%", height: "100%" }}
        source={require("../images/HomePage.png")}
      />
      <Image
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          left: "77%",
          marginTop: 66,
        }}
        source={require("../images/ProfilePic.png")}
      />
      <SafeAreaView>
        <View style={styles.timerContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.timerFontStyle}>00</Text>
              <Text style={styles.timerSmallText}>hours</Text>
            </View>
            <Text style={styles.timerFontStyle}>:</Text>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.timerFontStyle}>{minutes}</Text>
              <Text style={styles.timerSmallText}>minutes</Text>
            </View>
            <Text style={styles.timerFontStyle}>:</Text>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.timerFontStyle}>
                {seconds < 10 && <Text>0</Text>}
                {seconds}
              </Text>
              <Text style={styles.timerSmallText}>seconds</Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Baloo-SemiBold",
              color: "#1D4871",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: -3,
            }}
          >
            You're almost done!
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.searchBar}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Baloo-Regular",
                color: "#1C1C1C",
              }}
            >
              Search for Apps
            </Text>
            <Image
              style={{ width: 16, height: 16 }}
              source={require("../images/filter-list.png")}
            />
          </View>
          <View style={styles.cardContainer}>
            <View style={[styles.appCard, { borderColor: "#A583C0" }]}>
              <Text style={styles.appTime}>00:02:37</Text>
              <View style={styles.titleAndLogoContainer}>
                <Text style={styles.appText}>Instagram</Text>
                <Image
                  style={styles.appLogo}
                  source={require("../images/Instagram.png")}
                />
              </View>
            </View>
            <View style={[styles.appCard, { borderColor: "#5FB185" }]}>
              <Text style={styles.appTime}>00:02:37</Text>
              <View style={styles.titleAndLogoContainer}>
                <Text style={styles.appText}>Facebook</Text>
                <Image
                  style={[styles.appLogo, { width: 42 }]}
                  source={require("../images/Facebook.png")}
                />
              </View>
            </View>
            <View style={[styles.appCard, { borderColor: "#F064A7" }]}>
              <Text style={styles.appTime}>00:05:16</Text>
              <View style={styles.titleAndLogoContainer}>
                <Text style={styles.appText}>Snapchat</Text>
                <Image
                  style={styles.appLogo}
                  source={require("../images/Snapchat.png")}
                />
              </View>
            </View>
            <View style={[styles.appCard, { borderColor: "#203A97" }]}>
              <Text style={styles.appTime}>00:013:26</Text>
              <View style={styles.titleAndLogoContainer}>
                <Text style={styles.appText}>YouTube</Text>
                <Image
                  style={[styles.appLogo, { width: 80, height: 32 }]}
                  source={require("../images/YouTube.png")}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                gap: 10,
                display: "flex",
                flexDirection: "row",
                marginTop: 4,
              }}
            >
              <View style={styles.moreCircles}></View>
              <View style={styles.moreCircles}></View>
              <View style={styles.moreCircles}></View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          position: "absolute",
          top: "87.5%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={styles.bottomNavigation}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image
              style={{ width: 28, height: 25 }}
              source={require("../images/HomeIcon.png")}
            />
          </Pressable>
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../images/MusicNote.png")}
          />
          <Image
            style={{ width: 29, height: 25 }}
            source={require("../images/HeartIcon.png")}
          />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Image
              style={{ width: 29, height: 25 }}
              source={require("../images/ProfileIcon.png")}
            />
          </Pressable>
        </View>
      </View>
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
    top: -12,
  },
  searchBar: {
    width: 244,
    height: 33,
    borderColor: "#BCCCDC",
    borderWidth: 1.33,
    borderRadius: 53,
    marginTop: 24,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContainer: {
    gap: 10,
    marginTop: 14,
  },
  appCard: {
    width: 264,
    height: 78,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 1.5,
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
  },
  appText: {
    fontSize: 19,
    fontFamily: "Baloo-SemiBold",
    top: 2,
  },
  appTime: {
    color: "#627D98",
    fontSize: 12,
  },
  appLogo: {
    width: 40,
    height: 38,
  },
  titleAndLogoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreCircles: {
    backgroundColor: "#797979",
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  bottomNavigation: {
    backgroundColor: "#092550",
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
