import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#eee", height: 80 },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header></Header>,
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
