import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <View className="flex flex-row items-center justify-between ml-4 my-2">
      <Pressable onPress={() => setOpen((prev) => !prev)}>
        <View className="relative flex flex-row items-center justify-center">
          <Image
            className="w-28 h-10 object-contain mr-1"
            source={{ uri: "https://i.ibb.co/56Rg44M/instagram.png" }}
          />
          {open && (
            <MaterialIcons name="keyboard-arrow-down" size={20}></MaterialIcons>
          )}
          <View
            style={styles.container}
            className={
              "absolute -bottom-20 flex flex-col bg-white px-2 rounded-xl items-center duration-300 transition justify-center z-50 " +
              (open ? "scale-100" : "scale-0")
            }
          >
            <View className="flex flex-row items-center justify-between w-24 m-2">
              <Text>Following</Text>
              <MaterialIcons name="group" size={15} />
            </View>
            <View className="flex flex-row items-center justify-between w-24 m-2">
              <Text>Favorites</Text>
              <Feather name="star" size={15} />
            </View>
          </View>
        </View>
      </Pressable>

      <View className="flex flex-row items-items justify-center mr-4">
        <View className="mx-2 flex ">
          <FontAwesome name="heart-o" size={25} />
        </View>
        <View className="mx-2 flex ">
          <Feather name="send" size={25} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    elevation: 10,
    zIndex: 10
  },
});

export default Header;
