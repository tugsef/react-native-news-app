import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native'
import news_banner_data from '@/assets/data/news_banner_data.json' 

function NewsBanner() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {news_banner_data.map((bannerNews, index) => (
      <Image
        key={index}
        style={styles.banner_image}
        source={{ uri: bannerNews.imageUrl }}
      />
    ))}
  </ScrollView>
  )
}

export default NewsBanner

const styles = StyleSheet.create({
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
})