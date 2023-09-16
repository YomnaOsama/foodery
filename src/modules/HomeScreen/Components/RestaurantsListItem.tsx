import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../../constants/colors'


type Props = {
  restaurantId: string
  restaurantName: string
  restaurantImage: string
  mealImage: string
  mealName: string
  tags: string
}

const RestaurantsListItem: React.FC<Props> = ({
  restaurantId,
  restaurantName,
  restaurantImage,
  mealImage,
  mealName,
  tags,
}) => {
  return (
    <View
      key={restaurantId}
      style={styles.conatiner}
    >
      <Image
        source={{ uri: mealImage || '' }}
        style={styles.mealImage}
      />
      <View
        style={styles.contentContainer}>
        <Image
          source={{ uri: restaurantImage || '' }}
          resizeMode={"contain"}
          style={styles.imageStyle}
        />
        <View
          style={styles.restaurantDetails}
        >
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          <Text style={styles.restaurantTags}>{tags}</Text>
        </View>
      </View>
    </View>
  )
}

export default RestaurantsListItem

const styles = StyleSheet.create({
  conatiner: {
    alignItems: "center",
    alignContent: "center",
    marginTop: 16,
  },
  mealImage: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
  contentContainer: {
    minHeight: 80,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  restaurantDetails: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
  },
  restaurantName: {
    color: colors.primaryText,
    fontWeight: "bold",
  },
  restaurantTags: {
    paddingVertical: 2,
    color: colors.secondaryText,
  },
})
