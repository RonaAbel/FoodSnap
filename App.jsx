import React, { useState } from "react";
import {View,Text,TouchableOpacity,Image,ScrollView,TextInput,StyleSheet} from "react-native";
import { colors, fontType } from "./src/assets/theme";
import { foodData, drinkData } from "./src/data";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Makanan");
  const [searchQuery, setSearchQuery] = useState("");

  const combinedData = [...foodData, ...drinkData];

  const filteredData = combinedData.filter(
    item =>
      item.category === selectedMenu &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background() }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
          paddingHorizontal: 16,
          paddingBottom: 120
        }}
      >
        <Text
          style={[
            styles.header,
            { color: colors.black(), fontFamily: fontType["Pjs-Bold"] }
          ]}
        >
          FOODSNAP MALANG
        </Text>

        <TextInput
          style={[
            styles.searchInput,
            { backgroundColor: colors.searchBackground() }
          ]}
          placeholder="Cari Nama Restoran..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />

        {/* Menu Tab */}
        <View style={styles.menuSelector}>
          <TouchableOpacity
            onPress={() => setSelectedMenu("Makanan")}
            style={[
              styles.menuButton,
              selectedMenu === "Makanan" && {
                backgroundColor: colors.blue()
              }
            ]}
          >
            <Text
              style={[
                styles.menuText,
                {
                  color: colors.white(),
                  fontFamily: fontType["Pjs-Medium"]
                }
              ]}
            >
              Makanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedMenu("Minuman")}
            style={[
              styles.menuButton,
              selectedMenu === "Minuman" && {
                backgroundColor: colors.blue()
              }
            ]}
          >
            <Text
              style={[
                styles.menuText,
                {
                  color: colors.white(),
                  fontFamily: fontType["Pjs-Medium"]
                }
              ]}
            >
              Minuman
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2 kartu besar pertama */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          {filteredData.slice(0, 2).map((item, index) => (
            <View
              key={index}
              style={[styles.bigCardContainer, { width: 300, marginRight: 16 }]}
            >
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text
                style={[
                  styles.cardTitle,
                  {
                    fontSize: 24,
                    fontFamily: fontType["Pjs-SemiBold"],
                    textAlign: "center"
                  }
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.cardLocation,
                  {
                    fontFamily: fontType["Pjs-Regular"],
                    textAlign: "center"
                  }
                ]}
              >
                {item.location}
              </Text>
              <Text
                style={[
                  styles.cardRating,
                  {
                    fontFamily: fontType["Pjs-Medium"],
                    color: colors.cardRatingColor()
                  }
                ]}
              >
                Rating: {item.rating}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Kartu kecil lainnya */}
        <View style={styles.cardContainer}>
          {filteredData.slice(2).map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={item.image}
                style={{ width: "100%", height: 80, borderRadius: 6 }}
              />
              <Text
                style={[
                  styles.cardTitle,
                  {
                    fontFamily: fontType["Pjs-Medium"],
                    fontSize: 14,
                    marginTop: 6
                  }
                ]}
              >
                {item.name}
              </Text>
              <Text style={[styles.cardLocation, { fontSize: 12 }]}>
                {item.location}
              </Text>
              <Text style={[styles.cardRating, { fontSize: 12 }]}>
                Rating: {item.rating}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation tetap menempel di bawah */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text
            style={[
              styles.navText,
              { color: colors.white(), fontFamily: fontType["Pjs-SemiBold"] }
            ]}
          >
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text
            style={[
              styles.navText,
              { color: colors.white(), fontFamily: fontType["Pjs-SemiBold"] }
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
  },
  searchInput: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    marginBottom: 16
  },
  menuSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: colors.grey(0.2)
  },
  menuText: {
    fontSize: 14
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
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
  bigCardContainer: {
    backgroundColor: colors.cardBackground(),
    marginBottom: 16,
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
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
  },
  bottomNav: 
{
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 16,
  backgroundColor: colors.background(),
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  elevation: 5,
  zIndex: 10 
},
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.blue(),
    borderRadius: 20
  },
  navText: {
    fontSize: 16,
    color: colors.white(),
    fontFamily: fontType["Pjs-Medium"]
  }
});

export default App;
