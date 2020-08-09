import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppHeader } from "../../components";
import { FaqScreen } from "../../screens";

const Stack = createStackNavigator();

export function FaqStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen name="FaqScreen" component={FaqScreen} />
    </Stack.Navigator>
  );
}
