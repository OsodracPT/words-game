import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Guess The Word" }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        initialParams={{ user: "me" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
