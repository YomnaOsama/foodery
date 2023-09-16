import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import axios from 'axios'
import colors from '../../../constants/colors';
import { Category } from '../../Common/types';
import { categoriesList } from '../../../constants/urls';
import CategoriesListItem from './CategoriesListItem';

const { width } = Dimensions.get("window");

const ExploreDishes: React.FC = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getCategories = () => {
    axios.get(`${categoriesList}`).then((res) => {
      const categoriesList = (res.data.categories as Category[]).slice(0, 8);
      categoriesList.push({
        idCategory: "seeAll",
        strCategory: "See All",
      })
      setCategoriesData(categoriesList)
      setLoading(false)
    })
      .catch(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  const renderItem = useCallback(
    ({ item }: { item: Category }) => {
      return (
        <CategoriesListItem
          categoryId={item.idCategory}
          image={item.strCategoryThumb}
          name={item.strCategory}
        />
      )
    },
    [],
  )

  const keyExtractor = useCallback((item: Category) => item.idCategory, [])

  return (
    <View style={styles.Container}>
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <>
          {
            categoriesData.length > 0 && (
              <Text style={styles.sectionTitle}>{"Explore Dishes"}</Text>
            )
          }
          <FlatList
            data={categoriesData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            maxToRenderPerBatch={8}
            windowSize={10}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.contentSeparator} />}
          />
        </>
      )}
    </View>

  )
}

export default ExploreDishes

const styles = StyleSheet.create({
  Container: {
    width: width,
    alignSelf: "center",
    paddingHorizontal: 16,
  },
  sectionTitle: {
    paddingVertical: 16,
    color: colors.primaryText,
    fontWeight: "bold",
  },
  contentSeparator: {
    marginHorizontal: 8,
  },
})
