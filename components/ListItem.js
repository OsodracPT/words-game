import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.lisItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <Ionicons
          style={{ alignSelf: "flex-end" }}
          name="ios-remove-circle"
          size={32}
          color="firebrick"
          onPress={() => props.deleteItem(props.item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ListItem;
