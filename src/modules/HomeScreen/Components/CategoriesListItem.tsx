import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import RightIArrow from '../../../components/Icons/RightIArrow'
import colors from '../../../constants/colors'

type Props = {
  categoryId: string
  image?: string
  name: string
}

const CategoriesListItem: React.FC<Props> = ({ categoryId, image, name }) => {
  const isGeneralCategory = categoryId === "seeAll";
  return (
    <View
      key={categoryId}
      style={styles.categoryContainer}
    >
      <View
        style={[
          styles.imageConatainer,
          isGeneralCategory && styles.generalCatbackgroundColor
        ]}
      >
        {
          !isGeneralCategory
            ? (<Image
              source={{ uri: image || '' }}
              resizeMode={"contain"}
              style={styles.imageStyle}
            />)
            : (<RightIArrow color={colors.primary} />)
        }
      </View>
      <Text numberOfLines={1} style={isGeneralCategory && styles.generalCat}>{name}</Text>
    </View>
  )
}

export default CategoriesListItem

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    width: 70,
  },
  imageConatainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    marginBottom: 4,
    borderRadius: 100,
    backgroundColor: colors.categoriesBackground,
  },
  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  generalCat: {
    color: colors.primary,
  },
  generalCatbackgroundColor: {
    backgroundColor: colors.fadedPrimary,
  },
})
