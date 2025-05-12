// src/components/ItemSmall.jsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, fontType } from "../theme";

const ItemSmall = ({ name, location, rating, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
      <Text style={[styles.cardTitle, { fontFamily: fontType['Pjs-SemiBold'] }]}>{name}</Text>
      <Text style={[styles.cardLocation, { fontFamily: fontType['Pjs-Regular'] }]}>{location}</Text>
      <Text style={[styles.cardRating, { fontFamily: fontType['Pjs-Medium'], color: colors.cardRatingColor() }]}>
        Rating: {rating}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: colors.cardBackground(),
    marginBottom: 16,
    borderRadius: 10,
    padding: 8,
    shadowColor: colors.cardShadow(0.2),
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 14
  },
  cardLocation: {
    color: colors.black(0.7),
    fontSize: 12
  },
  cardRating: {
    fontSize: 12
  }
});

export default ItemSmall;