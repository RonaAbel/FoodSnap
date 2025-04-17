const colors = {
  grey: (opacity = 1) => `rgba(237, 232, 220, ${opacity})`,
  blue: (opacity = 1) => `rgba(242, 226, 177, ${opacity})`,         // Aksen hijau tombol "+"
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  darkModeBlack: (opacity = 1) => `rgba(34, 34, 34, ${opacity})`,  // Warna gelap tapi soft
  darkModeBlue: (opacity = 1) => `rgba(165, 214, 192, ${opacity})`,// Biru kehijauan pastel

  // Tambahan agar lebih deskriptif
  background: (opacity = 1) => `rgba(111, 130, 106, ${opacity})`,  // Latar belakang pastel kuning
  cardBackground: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Putih bersih
  cardShadow: (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,      // Shadow soft (10%)
  cardRatingColor: (opacity = 1) => `rgba(240, 134, 38, ${opacity})`, // Oranye untuk rating
  searchBackground: (opacity = 1) => `rgba(243, 244, 238, ${opacity})` // Hijau pastel pucat
};

export default colors;
