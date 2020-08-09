// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, FaqScreen, ProfileScreen } from "./ui/screens";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          height: 80,
          padding: 20,
          justifyContent: "flex-end",
          alignItems: "baseline",
        }}
      >
        <FontAwesome name="navicon" size={25} />
      </View>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="FaqScreen" component={FaqScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
