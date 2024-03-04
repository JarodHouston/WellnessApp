import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

export default function Calendar({ navigation }) {
  const [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
    "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
  });

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
      <SafeAreaView style={{ height: "100%" }}>
        <View style={{ height: "100%" }}>
          <View style={styles.container}>
            <Text style={styles.schedule_text}>Today's schedule</Text>
            <View
              style={{
                marginTop: 20,
                backgroundColor: "#fff",
                height: 32,
                borderRadius: 25,
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.gridImage}
                  source={require("../images/search.png")}
                />
                <Text style={{ marginLeft: 10 }}>Search</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 42,
                display: "flex",
              }}
            >
              <View style={[styles.date, { backgroundColor: "#486581" }]}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Friday {"\n"} 2
                </Text>
              </View>
              <View style={styles.date}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#486581",
                    fontWeight: "bold",
                  }}
                >
                  Saturday {"\n"} 3
                </Text>
              </View>
              <View style={styles.date}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#486581",
                    fontWeight: "bold",
                  }}
                >
                  Sunday {"\n"} 4
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: "#fff",
                height: 42,
                borderRadius: 25,
                justifyContent: "center",
                borderColor: "#BCCCDC",
                borderWidth: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ marginLeft: 15 }}>Filter Types</Text>
                <Image
                  style={styles.gridImage_filter}
                  source={require("../images/filter-list.png")}
                />
              </View>
            </View>

            <View>
              <Text style={{ marginTop: 20, color: "grey" }}>
                8:30 am - 12:00 pm
              </Text>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  borderRadius: 6.5,
                  marginTop: 10,
                  borderColor: "#A583C0",
                  borderWidth: 2,
                }}
              >
                <View style={styles.tag}>
                  <Text style={{ color: "#627D98" }}>8:30 am - 9:15 am</Text>
                  <Text style={styles.task_text}>Breakfast</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View
                      style={[styles.type_tag, { backgroundColor: "#EC9DC3" }]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Meals
                      </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#7691AC" }}>B-Plate</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  borderRadius: 6.5,
                  marginTop: 10,
                  borderColor: "#5FB185",
                  borderWidth: 2,
                }}
              >
                <View style={styles.tag}>
                  <Text style={{ color: "#627D98" }}>10:00 am - 12:00 pm</Text>
                  <Text style={styles.task_text}>Linear Algebra</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View
                      style={[styles.type_tag, { backgroundColor: "#95D1B0" }]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Class
                      </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#7691AC" }}>Moore 100</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <Text style={{ marginTop: 20, color: "grey" }}>
                8:30 am - 12:00 pm
              </Text>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  borderRadius: 6.5,
                  marginTop: 10,
                  borderColor: "#A583C0",
                  borderWidth: 2,
                }}
              >
                <View style={styles.tag}>
                  <Text style={{ color: "#627D98" }}>8:30 am - 9:15 am</Text>
                  <Text style={styles.task_text}>Lunch</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View
                      style={[styles.type_tag, { backgroundColor: "#EC9DC3" }]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Meals
                      </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#7691AC" }}>Ackerman</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  borderRadius: 6.5,
                  marginTop: 10,
                  borderColor: "#203A97",
                  borderWidth: 2,
                }}
              >
                <View style={styles.tag}>
                  <Text style={{ color: "#627D98" }}>10:00 am - 12:00 pm</Text>
                  <Text style={styles.task_text}>Study Session</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View
                      style={[styles.type_tag, { backgroundColor: "#8B9EE3" }]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Class
                      </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#7691AC" }}>YRL</Text>
                    </View>
                  </View>
                </View>
              </View>
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
  container: {
    width: 290,
    marginLeft: "auto",
    marginRight: "auto",
  },
  schedule_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Baloo-ExtraBold",
    marginTop: 30,
  },
  date: {
    backgroundColor: "#fff",
    height: "100%",
    width: 89,
    borderRadius: 60,
    justifyContent: "center",
    //flex:1
  },
  tag: {
    width: 250,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  task_text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Baloo-ExtraBold",
    marginTop: 5,
  },
  type_tag: {
    width: 50,
    height: 17,
    borderRadius: 12,
  },
  gridImage: {
    width: 15,
    height: 15,
    marginLeft: 10,
    alignItems: "flex-start",
  },
  gridImage_filter: {
    width: 20,
    height: 20,
    marginRight: 15,
    alignItems: "flex-end",
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
