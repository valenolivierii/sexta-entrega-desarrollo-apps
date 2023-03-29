import React from 'react'
import { StyleSheet, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../constants/fonts'

const GridItem = ({ category, onSelected }) => {
  const { title, url } = category;
  return (
    <View style={styles.gridItem}>
      <ImageBackground
        source={{ uri: url }}
        style={[styles.image]}
        imageStyle={{ borderRadius: 5 }}
        resizeMode='stretch'
      >
        <TouchableOpacity
          onPress={() => onSelected(category)}
          style={styles.container}
        >
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 30,
    height: 150,
  },
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: FONTS.OPSANSBOLD,
    textAlign: 'center',
  }
})