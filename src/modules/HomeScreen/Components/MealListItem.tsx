import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'

import colors from '../../../constants/colors'

const { width } = Dimensions.get("window");

type Props = {
  mealId: string
  image: string
  restaurant: string
  name: string
}

const MealListItem: React.FC<Props> = ({ mealId, image, restaurant, name }) => {

  return (
    <View
      key={mealId}
      style={styles.mealContainer}>
      <Image
        source={{ uri: image || '' }}
        resizeMode={"contain"}
        style={styles.mealImage}
      />
      <View
        style={styles.contentContainer}
      >
        <Text style={styles.restaurantName}>{restaurant}</Text>
        <Text style={styles.mealName}>{name}</Text>
      </View>
      <Pressable
        style={styles.actionContainer}
      >
        <Text style={styles.reOrderText}>{"Re-order"}</Text>
      </Pressable>
    </View>
  )
}

export default MealListItem

const styles = StyleSheet.create({
  mealContainer: {
    backgroundColor: "#fafafa",
    width: width * 0.8,
    minHeight: 80,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  restaurantName: {
    color: colors.primaryText,
    fontWeight: "bold",
  },
  mealName: {
    paddingVertical: 2,
    color: colors.secondaryText,
  },
  actionContainer: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: "#9ea0af",
    borderRadius: 50,
    width: 70,
    height: 30,
    justifyContent: "center",
  },
  reOrderText: {
    color: colors.primaryText,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
})
