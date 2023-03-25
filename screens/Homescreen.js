import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Homescreen = () => {
  return (
    <View className="flex flex-col justify-center">
      <Header />
      <Text style={{zIndex: 1}} className="z-10 text-blue-400">Homescreen</Text> 
    </View>
  )
}

export default Homescreen