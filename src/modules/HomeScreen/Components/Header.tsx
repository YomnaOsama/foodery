import React from 'react'
import { Dimensions, I18nManager, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

import LocationIcon from '../../../components/Icons/LocationIcon';
import RightIArrow from '../../../components/Icons/RightIArrow';
import SearchIcon from '../../../components/Icons/SearchIcon';
import colors from '../../../constants/colors'

const { width } = Dimensions.get("window");

const Header: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <View
        style={styles.addressConatiner}
      >
        <LocationIcon />
        <View style={styles.addressContent}>
          <Text style={styles.deliveringTo}>{"Delivering to"}</Text>
          <View style={styles.row}>
            <Text style={styles.addressText}>{"New Ciro "}</Text>
            <RightIArrow
              height={20}
              transform={[{ rotate: '90deg' }]} />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder={
            "search for a resturent or a dish"
          }
          placeholderTextColor={colors.placeholder}
          clearButtonMode="never"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          returnKeyLabel="Search"
        />
      </View>
    </View>
  </View>

);

export default Header

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    minHeight: 150,
    width: width,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: colors.headerBackground,
  },
  contentContainer: {
    width: "100%",
  },
  addressContent: {
    paddingLeft: 8,
  },
  addressConatiner: {
    flexDirection: "row",
  },
  deliveringTo: {
    color: colors.secondaryText,
  },
  addressText: {
    color: colors.primaryText,
    fontWeight: "600",
    paddingRight: 24,
    lineHeight: 20,
  },
  searchContainer: {
    minHeight: 48,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.white,
    marginVertical: 11,
    paddingHorizontal: 16,
  },
  searchInput: {
    marginLeft: 16,
    fontSize: 14,
    flex: 1,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  row: {
    flexDirection: "row"
  },
})
