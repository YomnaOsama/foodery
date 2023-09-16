import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import ExploreDishes from '../modules/HomeScreen/Components/ExploreDishes';
import Header from '../modules/HomeScreen/Components/Header';
import PreviousOrders from '../modules/HomeScreen/Components/PreviousOrders';
import Restaurants from '../modules/HomeScreen/Components/Restaurants';

const { width } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Header />
      <ScrollView
        scrollEnabled
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <ExploreDishes />
        {/* Divider */}
        <View style={styles.divider} />
        <PreviousOrders />
        {/* Divider */}
        <View style={styles.divider} />
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  divider: {
    width: width,
    height: 8,
    backgroundColor: colors.dividerColor,
    marginVertical: 16,
  },
})
