// src/components/ListHorizontal.jsx
import React from "react";
import { View, ScrollView } from "react-native";
import ItemSmall from "./ItemSmall";

const ListHorizontal = ({ data }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
      {data.map((item, index) => (
        <View key={index} style={{ marginRight: 12 }}>
          <ItemSmall
            name={item.name}
            location={item.location}
            rating={item.rating}
            image={item.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ListHorizontal;