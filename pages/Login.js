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

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
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
        <View style={{ marginTop: 40 }}>
          <Text style={styles.appName}>Wellness App</Text>
          <TextInput></TextInput>
        </View>
        <Image
          style={{
            width: 200,
            height: 200,
            marginLeft: "auto",
            marginRight: "auto",
            left: -10,
          }}
          source={require("../images/BearLogo.png")}
        />
        <View style={{ alignItems: "center", top: -54 }}>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                textAlign: "left",
                width: "100%",
                left: 8,
                fontSize: 16,
                fontFamily: "Baloo-Bold",
              }}
            >
              Username
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setUsername(text)}
              placeholder="Input Text"
              value={username}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                textAlign: "left",
                width: "100%",
                left: 8,
                fontSize: 16,
                fontFamily: "Baloo-Bold",
              }}
            >
              Password
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              placeholder="Input Text"
              value={password}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontSize: 18, fontFamily: "Baloo-Bold" }}>
              Log In
            </Text>
          </Pressable>
          <View style={{ alignItems: "center", marginTop: 42, gap: 2 }}>
            <Text>Don't have an account?</Text>
            <Text style={{ textDecorationLine: "underline" }}>
              Create an account!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Baloo-ExtraBold",
  },
  input: {
    width: 290,
    height: 50,
    borderColor: "#C37315",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  button: {
    width: 260,
    height: 45,
    backgroundColor: "#F9D56E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 28,
  },
});
