import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const { width } = Dimensions.get('window');
const logo = require('../assets/bakso.png');
const bannerImages = [
  { id: '1', banner: require('../assets/banner.jpg') },
  { id: '2', banner: require('../assets/banner2.jpg') },
  { id: '3', banner: require('../assets/banner3.jpg') }
];
const menuImages = [
  { id: '1', menu: require('../assets/menu/2.jpeg'), title: "How hard is it for humans to climb Mount Everest?", likes: 10 },
  { id: '2', menu: require('../assets/menu/3.jpeg'), title: "What is used in life to use Newton's first law?", likes: 20 },
  { id: '3', menu: require('../assets/menu/4.jpeg'), title: "How to learn to get along well with others?", likes: 30 },
  { id: '4', menu: require('../assets/menu/1.jpeg'), title: "Menu 4", likes: 40 },
  { id: '5', menu: require('../assets/menu/5.jpeg'), title: "Menu 5", likes: 50 },
  { id: '6', menu: require('../assets/menu/6.jpeg'), title: "Menu 6", likes: 60 },
];

const categories = [
  { id: '1', name: 'Populer' },
  { id: '2', name: 'Bakso' },
  { id: '3', name: 'Mie Bakso' },
  { id: '4', name: 'Minuman' },
];

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('1');

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

  const handleCategoryPress = (categoryId) => {
    // Navigate to respective category screen based on categoryId
    switch (categoryId) {
      case '2':
        navigation.navigate('BaksoScreen'); // Navigate to BaksoScreen
        break;
      case '3':
        navigation.navigate('MieBaksoScreen'); // Navigate to MieBaksoScreen
        break;
      case '4':
        navigation.navigate('MinumanScreen'); // Navigate to MinumanScreen
        break;
      default:
        // Handle default action
        break;
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategoryItem]} 
      onPress={() => handleCategoryPress(item.id)}
      key={item.id}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
      {selectedCategory === item.id && <View style={styles.categoryIndicator} />}
    </TouchableOpacity>
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

      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />
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
    color: '#333',
  },
  bannerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  bannerList: {
    paddingHorizontal: 10,
  },
  bannerImage: {
    width: width - 20,
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
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  selectedCategoryItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6347',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  categoryIndicator: {
    width: 20,
    height: 2,
    backgroundColor: '#FF6347',
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
    color: '#333',
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
  
  orderButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 50,
    marginBottom: 20,
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  socialText: {
    marginRight: 10,
    fontSize: 16,
    color: '#666',
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default HomeScreen;
