import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>HELLO</Text>
      <Pressable onPress={() => navigation.navigate("Calendar")}>
        <Text>Calendar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
}
