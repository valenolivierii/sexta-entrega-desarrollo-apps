import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/fonts'

const BreadItem = ({ bread, onSelected }) => {
  const { name, price, weight, picture } = bread;
  return (
    <TouchableOpacity onPress={() => onSelected(bread)}>
      <View style={styles.breadItem}>
        <Image source={{ uri: picture }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>${price}</Text>
          <Text style={styles.details}>{weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BreadItem

const styles = StyleSheet.create({
  breadItem: {
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 130,
  },
  info: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.OPSANSBOLD,
  },
  details: {
    fontSize: 18,
  },
})