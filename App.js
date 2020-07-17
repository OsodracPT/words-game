import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Guess The Word"}></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: "darkslateblue",
    fontSize: 30,
  },
});
