import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { GridItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../redux/actions/category.action';

const Home = ({ navigation }) => {

  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelected = category => {
    dispatch(selectCategory(category.id))
    navigation.navigate('Categories', { name: category.title })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <GridItem category={item} onSelected={handleSelected} />}
        keyExtractor={(category) => category.id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#D9D9D9',
  }
})