import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Users } from '../data/users'

const Stories = () => {
    const images = Users.map((user, index) => {
        return (
            <View 
                className="m-2"
                key={index}
            >
                <View className="flex items-center justify-center rounded-full w-[72px] h-[72px] border-2 bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                    <Image
                        className="rounded-full w-16 h-16"
                        source={{uri: user.image}}
                    />
                </View>
                <Text numberOfLines={1} className="w-16 text-center text-xs mt-2">{user.name}</Text>
            </View>
        )
    })
  return (
    <View style={styles.stories}>
      <ScrollView 
        className="flex"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    stories: {
        position: 'relative',
        zIndex: 0,
        borderBottomWidth: 0.5, 
        borderBottomColor: 'gray', 
        borderBottomStyle: 'solid' 
    }
});

export default Stories