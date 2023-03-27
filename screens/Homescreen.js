import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'

const Homescreen = () => {
  return (
    <View className="flex flex-col justify-center">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  )
}

export default Homescreen