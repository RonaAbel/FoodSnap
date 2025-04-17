import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from "react-native";
import { colors, fontType } from "./src/assets/theme"; // Sesuaikan path ke file tema

const foodData = [
  {
    name: "Warung Mekar Jaya",
    rating: 4.5,
    image: { uri: "https://assets.pikiran-rakyat.com/crop/0x469%3A1400x1717/1200x675/photo/2024/04/07/3583402426.png" },
    location: "Jl. Soekarno Hatta No.2, Malang"
  },
  {
    name: "Depot Mie Gadjah Mada 1",
    rating: 4.7,
    image: { uri: "https://media-cdn.yummyadvisor.com/store/95b1876a-cb66-4b02-9d5b-8cec57dd014c.jpg?x-oss-process=style%2Ftype_11" },
    location: "Jl. Pasar No. 17A, Sukoharjo, Klojen, Malang"
  },
  {
    name: "Rawon Tessy",
    rating: 4.6,
    image: { uri: "https://media-cdn.tripadvisor.com/media/photo-s/18/c2/22/e8/rawon-tessy.jpg" },
    location: "Jl. Trunojoyo No. 10, Klojen, Malang"
  },
  {
    name: "Bakso Damas",
    rating: 4.8,
    image: { uri: "https://www.pilar.id/wp-content/uploads/2023/07/img-pilar77-49.jpg" },
    location: "Jl. Soekarno Hatta No. 70, Mojolangu, Lowokwaru, Malang"
  },
  {
    name: "Warung Cak Pi'i",
    rating: 4.4,
    image: { uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/fc/0e/95/img20190106112424-largejpg.jpg" },
    location: "Jl. Letjen Sutoyo No.14, Lowokwaru, Malang"
  }
];

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Makanan"); // Menyimpan menu yang dipilih
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = foodData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Konten Menu */}
      <ScrollView style={[styles.container, { backgroundColor: colors.background() }]}>
        <Text style={[styles.header, { color: colors.black(), fontFamily: fontType['Pjs-Bold'] }]}>FOODSNAP MALANG</Text>

        <TextInput
          style={[styles.searchInput, { backgroundColor: colors.searchBackground() }]}
          placeholder="Cari Nama Restoran..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />

        <View style={styles.menuSelector}>
          <TouchableOpacity
            onPress={() => setSelectedMenu("Makanan")}
            style={[
              styles.menuButton,
              selectedMenu === "Makanan" && { backgroundColor: colors.blue() }
            ]}
          >
            <Text style={[styles.menuText, { color: colors.white(), fontFamily: fontType['Pjs-Medium'] }]}>Makanan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedMenu("Minuman")}
            style={[
              styles.menuButton,
              selectedMenu === "Minuman" && { backgroundColor: colors.blue() }
            ]}
          >
            <Text style={[styles.menuText, { color: colors.white(), fontFamily: fontType['Pjs-Medium'] }]}>Minuman</Text>
          </TouchableOpacity>
        </View>

        {/* Warung Mekar Jaya di tengah besar */}
        <View style={styles.bigCardContainer}>
          <Image
            source={foodData[0].image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={[styles.cardTitle, { fontSize: 30, fontFamily: fontType['Pjs-SemiBold'], textAlign: 'center' }]}>
            {foodData[0].name}
          </Text>
          <Text style={[styles.cardLocation, { fontFamily: fontType['Pjs-Regular'], textAlign: 'center' }]}>
            {foodData[0].location}
          </Text>
          <Text style={[styles.cardRating, { fontFamily: fontType['Pjs-Medium'], color: colors.cardRatingColor() }]}>
            Rating: {foodData[0].rating}
          </Text>
        </View>

        {/* Makanan lain kotak-kotak kecil */}
        <View style={styles.cardContainer}>
          {filteredData.slice(1).map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={[styles.cardTitle, { fontFamily: fontType['Pjs-SemiBold'] }]}>{item.name}</Text>
              <Text style={[styles.cardLocation, { fontFamily: fontType['Pjs-Regular'] }]}>{item.location}</Text>
              <Text style={[styles.cardRating, { fontFamily: fontType['Pjs-Medium'], color: colors.cardRatingColor() }]}>
                Rating: {item.rating}
              </Text>
            </View>
          ))}
          {filteredData.length === 0 && (
            <Text style={{ textAlign: "center", marginTop: 20 }}>Restoran tidak ditemukan.</Text>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={[styles.navText, { color: colors.white(), fontFamily: fontType['Pjs-SemiBold'] }]}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={[styles.navText, { color: colors.white(), fontFamily: fontType['Pjs-SemiBold'] }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flex: 1
  },
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
    alignItems: 'center',
    justifyContent: 'center',
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
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: colors.white, // Menggunakan warna biru transparan
    borderRadius: 10,
    paddingHorizontal: 16
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
    fontFamily: fontType['Pjs-Medium']
  }
});

export default App;