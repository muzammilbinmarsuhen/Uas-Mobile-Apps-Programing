import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const logo = require('../assets/bakso.png'); // Ganti dengan URL logo toko bakso Anda
const menuImages = [
  { id: '1', menu: require('../assets/menu/2.jpeg') },
  { id: '2', menu: require('../assets/menu/3.jpeg') },
  { id: '3', menu: require('../assets/menu/4.jpeg') },
  { id: '3', menu: require('../assets/menu/1.jpeg') },
  { id: '3', menu: require('../assets/menu/5.jpeg') },
  { id: '3', menu: require('../assets/menu/6.jpeg') },
]; // Ganti dengan URL gambar menu Anda
const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Image source={item.menu} style={styles.menuImage} key={item.id} />
  );
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <FlatList
        data={menuImages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menuList}
      />

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>Jam Buka: 10:00 - 22:00</Text>
      <Text style={styles.infoText}>Lokasi: Jl. Contoh No. 123, Jakarta</Text>

      <View style={styles.socialLinks}>
        <Text style={styles.socialText}>Ikuti kami di:</Text>
        <TouchableOpacity>
          <Image source={ require ('../assets/fb.png') } style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ require ('../assets/ig.png') } style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require ('../assets/tw.png') } style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF6347', // Ubah warna latar belakang sesuai kebutuhan
    padding: 20,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  menuList: {
    padding:1,
    flexGrow: 0,
    marginBottom: 20,
  },
  menuImage: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  orderButton: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialText: {
    color: '#000000',
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