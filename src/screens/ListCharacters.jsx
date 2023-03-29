import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity, StyleSheet, Text, Dimensions, View } from 'react-native'
import { BreadItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { breadSelected, filteredBreads } from '../redux/actions/bread.actions';
import { COLORS } from '../constants/colors'

const { width } = Dimensions.get('screen')

const ListCharacters = ({ navigation }) => {

  const dispatch = useDispatch()
  const categoryBreads = useSelector(state => state.breads.filteredBreads)
  const categorySelected = useSelector(state => state.categories.selectedCategory)

  useEffect(() => {
    dispatch(filteredBreads(categorySelected.id))
  }, [])

  const handleSelected = bread => {
    dispatch(breadSelected(bread.id))
    navigation.navigate('Details', { name: bread.name })
  }

  if (categoryBreads.length === 0) {
    return (
      <View style={styles.listEmpty}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.popToTop()}>
          <Text style={styles.text_box}>Sin productos :c</Text>
          <Text style={styles.text_box}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryBreads}
        renderItem={({ item }) => <BreadItem bread={item} onSelected={handleSelected} />}
        keyExtractor={(bread) => bread.id}
      />
    </View>
  )
}

export default ListCharacters


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#D9D9D9',
  },
  listEmpty: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 5,
    width: width / 2,
  },
  text_box: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 16,
  }
})