import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  const item = route.params;
  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]}></Image>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {},
});
