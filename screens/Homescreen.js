import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'

const Homescreen = () => {
  return (
    <View className="flex flex-col justify-center">
      <Header />
      <Stories />
      <Post />
    </View>
  )
}

export default Homescreen