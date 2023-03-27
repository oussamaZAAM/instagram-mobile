import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'
import { Posts } from '../data/posts'
import Navbar from '../components/Navbar'

const Homescreen = () => {
  return (
    <View className="flex flex-col justify-center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Stories />
        {Posts.map((post, index) => {
          return (
            <Post key={index} post={post} />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Homescreen