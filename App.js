import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem.js";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Egg" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Juice" },
    { id: 5, text: "Noodles" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    setItems((prevItems) => {
      return [{ id: 69, text }, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title={"Guess The Word"}></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}
      />
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
