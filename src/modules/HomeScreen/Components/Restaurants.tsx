
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import colors from '../../../constants/colors';
import { Restaurant } from '../../Common/types';
import { restaurants } from '../../../constants/restaurants';
import RestaurantsListItem from './RestaurantsListItem';

const { width } = Dimensions.get("window");

// Used a hardcodded list of restaurants
const Restaurants: React.FC = () => {

  const renderItem = useCallback(
    ({ item }: { item: Restaurant }) => {
      return (
        <RestaurantsListItem
          restaurantId={item.idRestaurant}
          restaurantName={item.strRestaurant}
          restaurantImage={item.strRestaurantThumb}
          mealImage={item.strMealThumb}
          mealName={item.strMeal}
          tags={item.strTags}
        />
      )
    },
    [],
  )

  const keyExtractor = useCallback((item: Restaurant) => item.idRestaurant, [])

  return (
    <View style={styles.Container}>
      <View
        style={styles.sectionContent}
      >
        <Text style={styles.sectionTitle}>{`All Restaurant (${restaurants.length})`}</Text>
        <Text style={styles.sectionDescription}>{"Curated list of finest restaurant for you"}</Text>
      </View>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={8}
        windowSize={10}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.contentSeparator} />}
      />
    </View>


  )
}

export default Restaurants

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: width,
    alignSelf: "center",
    paddingHorizontal: 16,
  },
  sectionContent: {
    width: width,
    paddingHorizontal: 16,
    alignSelf: "center",
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
    marginBottom: 8,
    backgroundColor: "green"
  }
})
