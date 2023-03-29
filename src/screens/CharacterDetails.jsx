import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Button, Text, Image, Dimensions } from 'react-native'
import { FONTS } from '../constants/fonts'

const { width } = Dimensions.get('window')

const CharacterDetails = ({ navigation }) => {

  const { name, description, price, weight, picture } = useSelector(state => state.breads.selectedBread)

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title='ir a inicio'
          color='#A94DAB'
          onPress={() => navigation.popToTop()} />
      </View>
      <View style={styles.product}>
        <Image
          source={{ uri: picture }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>${price}</Text>
          <Text>{weight}</Text>
        </View>
      </View>
    </View>
  )
}

export default CharacterDetails

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  product: {
    marginHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.56,
    shadowRadius: 20,
    elevation: 5,
  },
  image: {
    height: width / 1.8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    paddingVertical: 20,
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FONTS.OPSANSBOLD,
    marginBottom: 10
  },
  description: {
    maxWidth: '70%',
    marginBottom: 5,
  }
})