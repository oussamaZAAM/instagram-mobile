import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Post = ({ post }) => {
  const data = [
    {
      id: "1",
      source: "https://cdn.myanimelist.net/images/characters/5/280615.jpg",
    },
    {
      id: "2",
      source: "https://cdn.myanimelist.net/images/characters/8/279870.jpg",
    },
    {
      id: "3",
      source: "https://cdn.myanimelist.net/images/characters/8/285150.jpg",
    },
    // Add more images as needed
  ];
  return (
    <View className="flex flex-col justify-start items-stretch">
      {/* Create Post Header  */}
      <View className="flex flex-row items-center justify-between my-2">
        <View className="flex flex-row items-center justify-center">
          <View className="mx-2">
            <Image
              source={{ uri: post.user_pic }}
              className="w-8 h-8 rounded-full"
            />
          </View>
          <Text className="">{post.user_name}</Text>
        </View>
        <View className="flex flex-row items-center justify-center m-2">
          <MaterialCommunityIcons name="dots-vertical" size={20} />
        </View>
      </View>

      {/* Post Image(s) */}
      <View className="">
        {Array.isArray(post.uri) 
        ? <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            renderItem={({ item }) => (
                <Image
                    source={{uri: item.source}}
                    className="h-[50vh] w-screen"
                />
            )}
        />
        : <Image source={{ uri: post.uri }} className="h-[50vh] w-screen" />}
      </View>

      {/* Post Interactions (Like/Comment/Share/Save) */}
      <View className="flex flex-row items-center justify-between my-2 mx-4">
        <View className="flex flex-row items-center justify-center">
          <View className="mr-4 flex ">
            <FontAwesome name="heart-o" size={25} />
          </View>
          <View className="mr-4 flex ">
            <Feather name="message-circle" size={25} />
          </View>
          <View className="mr-4 flex ">
            <Feather name="send" size={25} />
          </View>
        </View>
        <View className="flex flex-row items-center justify-center">
          <View className="mx-2 flex ">
            <FontAwesome name="bookmark-o" size={25} />
          </View>
        </View>
      </View>
      {/* Likes  */}
      <View className="ml-4">
        <Text className="text-sm font-bold">{post.likes} likes</Text>
      </View>
      {/* Description  */}
      <View className="w-[80vw] flex flex-row items-start justify-start ml-4">
        <Text className="font-bold">{post.user_name} </Text>
        <Text className="w-full whitespace-normal">
          {post.description}
        </Text>
      </View>
    </View>
  );
};

export default Post;
