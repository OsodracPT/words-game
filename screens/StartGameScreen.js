import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          keyboardType="number-pad"
          maxLength={2}
        ></Input>

        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}}></Button>
          <Button title="Confirm" onPress={() => {}}></Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
