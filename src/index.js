import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack, ProfileStack, FaqStack } from "./ui/stacks";
import { NavigationService } from "./services";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer
      ref={(navigator) => NavigationService.setNavigator({ navigator })}
    >
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="FaqStack" component={FaqStack} />
        <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
