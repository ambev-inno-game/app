import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppHeader } from "../../components";
import { ProfileScreen } from "../../screens";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
