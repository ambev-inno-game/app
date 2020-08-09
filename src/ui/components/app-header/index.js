import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationService } from "~/services";

import style from "./styles";

export function AppHeader() {
  function onHamburguerPress() {
    NavigationService.openDrawer();
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onHamburguerPress}>
        <FontAwesome name="navicon" size={25} />
      </TouchableOpacity>
    </View>
  );
}
