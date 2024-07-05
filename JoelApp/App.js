import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        I am a student of <Text style={styles.boldText}>University Of Ghana</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: "#FFDBBB",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 31
,
  },
  boldText: {
    fontWeight: "bold",
  },
});
