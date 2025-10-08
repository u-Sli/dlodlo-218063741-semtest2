import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../app/screens/Login";
import Registration from "../app/screens/Registration";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}