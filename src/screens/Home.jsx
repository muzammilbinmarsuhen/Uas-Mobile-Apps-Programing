import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, TextInput, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const logo = require('../assets/bakso.png');
const bannerImages = [
  { id: '1', banner: require('../assets/banner.jpg') },
  { id: '2', banner: require('../assets/banner2.jpg') },
  { id: '3', banner: require('../assets/banner3.jpg') }
];
const menuImages = [
  { id: '1', menu: require('../assets/menu/2.jpeg'), title: "Menu 1", likes: 10 },
  { id: '2', menu: require('../assets/menu/3.jpeg'), title: "Menu 2", likes: 20 },
  { id: '3', menu: require('../assets/menu/4.jpeg'), title: "Menu 3", likes: 30 },
  { id: '4', menu: require('../assets/menu/1.jpeg'), title: "Menu 4", likes: 40 },
  { id: '5', menu: require('../assets/menu/5.jpeg'), title: "Menu 5", likes: 50 },
  { id: '6', menu: require('../assets/menu/6.jpeg'), title: "Menu 6", likes: 60 },
];

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const onBannerScroll = (event) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentBannerIndex(newIndex);
  };

  const renderBannerItem = ({ item }) => (
    <Image source={item.banner} style={styles.bannerImage} key={item.id} />
  );

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuCard} key={item.id}>
      <Image source={item.menu} style={styles.menuImage} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <View style={styles.menuLikeContainer}>
          <Image source={require('../assets/like.png')} style={styles.likeIcon} />
          <Text style={styles.menuLikes}>{item.likes}</Text>
        </View>
      </View>
    </View>
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
        <FlatList
          data={bannerImages}
          renderItem={renderBannerItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onBannerScroll}
          scrollEventThrottle={16}
          style={styles.bannerList}
        />
        <View style={styles.indicatorContainer}>
          {bannerImages.map((_, index) => (
            <View key={index} style={[styles.indicator, currentBannerIndex === index ? styles.activeIndicator : null]} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Event</Text>
        <View style={styles.eventCard}>
          <Image source={bannerImages[0].banner} style={styles.eventImage} />
          <Text style={styles.eventText}>Picture book, online store</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          data={menuImages}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.menuList}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explosion Today</Text>
        <FlatList
          data={menuImages}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.menuList}
        />
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
  bannerList: {
    paddingHorizontal: 10,
  },
  bannerImage: {
    width: width - 5,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#FF6347',
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
  menuCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  menuLikes: {
    fontSize: 14,
    color: '#888',
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



export default Home;
