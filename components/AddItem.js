import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity onPress={() => addItem(text)} style={styles.btn}>
        <Text style={styles.btnText}>
          <Ionicons
            name="ios-add-circle"
            size={20}
            onPress={() => props.deleteItem(props.item.id)}
          />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
