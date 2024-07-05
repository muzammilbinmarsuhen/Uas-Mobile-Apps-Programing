import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const logo = require('../assets/bakso.png');
const menuImages = [
  { id: '1', menu: require('../assets/menu/2.jpeg') },
  { id: '2', menu: require('../assets/menu/3.jpeg') },
  { id: '3', menu: require('../assets/menu/4.jpeg') },
  { id: '4', menu: require('../assets/menu/1.jpeg') },
  { id: '5', menu: require('../assets/menu/5.jpeg') },
  { id: '6', menu: require('../assets/menu/6.jpeg') },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Image source={item.menu} style={styles.menuImage} key={item.id} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>Quality goods, waiting for you to choose!</Text>
      </View>

      <FlatList
        data={menuImages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menuList}
      />

      <View style={styles.explosionSection}>
        <Text style={styles.explosionTitle}>Explosion today</Text>
        <View style={styles.explosionList}>
          {menuImages.map((item) => (
            <Image key={item.id} source={item.menu} style={styles.explosionImage} />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>Jam Buka: 10:00 - 22:00</Text>
      <Text style={styles.infoText}>Lokasi: Jl. Contoh No. 123, Jakarta</Text>

      <View style={styles.socialLinks}>
        <Text style={styles.socialText}>Ikuti kami di:</Text>
        <TouchableOpacity>
          <Image source={require('../assets/fb.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/ig.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/tw.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  menuImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  explosionSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  explosionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  explosionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  explosionImage: {
    width: '48%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  orderButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#333333',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialText: {
    color: '#333333',
    fontSize: 16,
    marginRight: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
});

export default HomeScreen;
