
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

import colors from '../../../constants/colors';
import { Meal } from '../../Common/types';
import { mealsList } from '../../../constants/urls';
import RightIArrow from '../../../components/Icons/RightIArrow';
import MealListItem from './MealListItem';

const { width } = Dimensions.get("window");

const PreviousOrders: React.FC = () => {
  const [mealsData, setMealsData] = useState<Meal[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getPrevMeals = () => {
    axios.get(`${mealsList}`).then((res) => {
      const mealsList = res.data.meals as Meal[];
      setMealsData(mealsList.slice(0, 4))
      setLoading(false)
    })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    getPrevMeals()
  }, [])

  const renderItem = useCallback(
    ({ item }: { item: Meal }) => {
      return (
        <MealListItem
          mealId={item.idMeal}
          image={item.strMealThumb}
          restaurant={item.strArea}
          name={item.strMeal}
        />

      )
    },
    [],
  )

  const keyExtractor = useCallback((item: Meal) => item.idMeal, [])

  return (
    <View style={styles.Container}>
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <>
          {
            mealsData.length > 0 && (
              <View style={styles.sectionContainer}>
                <View
                  style={styles.sectionContent}
                >
                  <Text style={styles.sectionTitle}>{"Order Again"}</Text>
                  <Text style={styles.sectionDescription}>{"Another chance to enjoy!"}</Text>

                </View>
                {
                  mealsData.length > 1 && (
                    <View style={styles.actionContainer}>
                      <Text style={styles.seeAll}>{"See All"}</Text>
                      <RightIArrow color={colors.primary} />
                    </View>
                  )
                }
              </View>
            )
          }
          <FlatList
            data={mealsData}
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

export default PreviousOrders

const styles = StyleSheet.create({
  Container: {
    width: width,
    alignSelf: "center",
    paddingHorizontal: 16,
  },
  sectionContent: {
    flex: 1,
    alignSelf: "center",
  },
  sectionContainer: {
    flexDirection: "row",
  },
  sectionTitle: {
    paddingTop: 16,
    color: colors.primaryText,
    fontWeight: "bold",
  },
  sectionDescription: {
    paddingVertical: 8,
    color: colors.secondaryText,
  },
  actionContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  seeAll: {
    color: colors.primary,
    fontSize: 12,
    lineHeight: 24,
  },
  contentSeparator: {
    marginHorizontal: 8,
  }
})
