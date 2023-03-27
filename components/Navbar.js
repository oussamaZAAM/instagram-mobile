import { View, Text, Image } from 'react-native'
import React from 'react'
import Octicons from "react-native-vector-icons/Octicons"

const Navbar = () => {
  return (
    <View className="flex flex-row items-center justify-between fixed bottom-6 w-screen bg-inherit h-[10vh] my-2">
        <View className="mx-4">
            <Octicons name="home" size={30}/>
        </View>
        <View className="mx-4">
            <Octicons name="search" size={30}/>
        </View>
        <View className="mx-4">
            <Octicons name="diff-added" size={30}/>
        </View>
        <View className="mx-4">
            <Octicons name="video" size={30}/>
        </View>
        <View className="mx-4">
            <Image source={{uri: "https://cdn.myanimelist.net/images/characters/8/285192.jpg"}} className="w-8 h-8 rounded-full" />
        </View>
    </View>
  )
}

export default Navbar