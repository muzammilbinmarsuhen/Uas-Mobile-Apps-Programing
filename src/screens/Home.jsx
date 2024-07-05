import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';

const logo = require('../assets/bakso.png');
const bannerImage = require('../assets/banner.jpg'); // Replace with your actual banner image path
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
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Event</Text>
        <View style={styles.eventCard}>
          <Image source={bannerImage} style={styles.eventImage} />
          <Text style={styles.eventText}>Picture book, online store</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          data={menuImages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.menuList}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explosion Today</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  bannerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  section: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  eventText: {
    fontSize: 16,
  },
  menuList: {
    paddingHorizontal: 10,
  },
  menuImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
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
