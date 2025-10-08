import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Registration from '../app/screens/Registration';
import Login from '../app/screens/Login';
import Product from '../app/screens/Product';
import ProductDetail from '../app/screens/ProductDetail';

const Stack = createStackNavigator();

export default function AppNavigator(){
    return (
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
       </Stack.Navigator>
    );
}