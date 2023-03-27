import { View, Text, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Post = () => {
  return (
    <View className="flex flex-col justify-start items-stretch">

      {/* Create Post Header  */}
      <View className="flex flex-row items-center justify-between my-2">
        <View className="flex flex-row items-center justify-center">
            <View className="mx-2">
                <Image source={{uri: "https://cdn.myanimelist.net/images/characters/8/285192.jpg"}} className="w-8 h-8 rounded-full" />
            </View>
            <Text className="">Lion Ryuu</Text>
        </View>
        <View className="flex flex-row items-center justify-center m-2">
            <MaterialCommunityIcons name='dots-vertical' size={20} />
        </View>
      </View>

      {/* Post Image(s) */}
      <View className="">
        <Image className="h-[50vh] w-screen" source={{uri: "https://cdn.myanimelist.net/images/characters/8/279870.jpg"}} />
      </View>

      {/* Post Interactions (Like/Comment/Share/Save) */}
      <View className="flex flex-row items-center justify-between m-2">
        <View className="flex flex-row items-center justify-center">
            <View className="mx-2 flex ">
                <FontAwesome name="heart-o" size={25} />
            </View>
            <View className="mx-2 flex ">
                <Feather name="message-circle" size={25} />
            </View>
            <View className="mx-2 flex ">
                <Feather name="send" size={25} />
            </View>
        </View>
        <View className="flex flex-row items-center justify-center">
            <View className="mx-2 flex ">
                <FontAwesome name="bookmark-o" size={25} />
            </View>
        </View>
      </View>
    </View>
  )
}

export default Post