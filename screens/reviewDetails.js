import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title="back to home" onPress={pressHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
