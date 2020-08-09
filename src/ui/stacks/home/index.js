import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppHeader } from "../../components";
import { HomeScreen } from "../../screens";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
