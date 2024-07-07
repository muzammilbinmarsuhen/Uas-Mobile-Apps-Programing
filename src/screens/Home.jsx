import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const logo = require('../assets/bakso.png');
const bannerImages = [
  {id: '1', banner: require('../assets/banner.jpg')},
  {id: '2', banner: require('../assets/banner2.jpg')},
  {id: '3', banner: require('../assets/banner3.jpg')},
  {id: '4', banner: require('../assets/banner4.jpg')},
];
const initialMenuImages = [
  {
    id: '1',
    menu: require('../assets/menu/2.jpeg'),
    title: 'Mie Bakso Jumbo',
    likes: 10,
    description: 'Delicious jumbo meatball with noodles',
  },
  {
    id: '2',
    menu: require('../assets/menu/3.jpeg'),
    title: 'Bakso Mercon Level 1',
    likes: 20,
    description: 'Spicy meatball level 1',
  },
  {
    id: '3',
    menu: require('../assets/menu/4.jpeg'),
    title: 'Bakso Beranak Telor',
    likes: 30,
    description: 'Meatball with egg inside',
  },
  {
    id: '4',
    menu: require('../assets/menu/1.jpeg'),
    title: 'Mie Bakso Hot',
    likes: 40,
    description: 'Hot and spicy meatball with noodles',
  },
  {
    id: '5',
    menu: require('../assets/menu/5.jpeg'),
    title: 'Bakso Kikil Udang',
    likes: 50,
    description: 'Meatball with shrimp',
  },
  {
    id: '6',
    menu: require('../assets/menu/6.jpeg'),
    title: 'Bakso Krucut',
    likes: 60,
    description: 'Pointy meatball',
  },
];

const categories = [
  {id: '1', name: 'Vindex Tengker', image: require('../assets/chef1.jpeg')},
  {id: '2', name: 'Renatta Moeloek', image: require('../assets/chef2.jpeg')},
  {id: '3', name: 'Juna Rorimpandey', image: require('../assets/chef3.jpeg')},
  {id: '4', name: 'Juna Rorimpandey', image: require('../assets/chef4.jpeg')},
];

const Home = () => {
  const navigation = useNavigation();

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [menuImages, setMenuImages] = useState(initialMenuImages);
  const [searchQuery, setSearchQuery] = useState('');

  const onBannerScroll = event => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentBannerIndex(newIndex);
  };

  const handleLikePress = id => {
    const updatedMenuImages = menuImages.map(item => {
      if (item.id === id) {
        return {...item, likes: item.likes + 1};
      }
      return item;
    });
    setMenuImages(updatedMenuImages);
  };

  const handleOrderNowPress = () => {
    navigation.navigate('Chart');
  };

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredMenuImages = menuImages.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderBannerItem = ({item}) => (
    <Image source={item.banner} style={styles.bannerImage} />
  );

  const renderMenuItem = ({item}) => (
    <View style={styles.menuCard} key={item.id}>
      <Image source={item.menu} style={styles.menuImage} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <View style={styles.menuLikeContainer}>
          <TouchableOpacity onPress={() => handleLikePress(item.id)}>
            <Image
              source={require('../assets/love.png')}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.menuLikes}>{item.likes}</Text>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={handleOrderNowPress}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const handleCategoryPress = categoryId => {
    setSelectedCategory(categoryId);
  };

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.id && styles.selectedCategoryItem,
      ]}
      onPress={() => handleCategoryPress(item.id)}
      key={item.id}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
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
          onChangeText={handleSearch}
          value={searchQuery}
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
            <View
              key={index}
              style={[
                styles.indicator,
                currentBannerIndex === index ? styles.activeIndicator : null,
              ]}
            />
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
        <Text style={styles.sectionTitle}>Populer</Text>
        <FlatList
          data={filteredMenuImages}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.menuList}
        />
      </View>

      <Text style={styles.infoText}>Jam Buka: 10:00 - 22:00</Text>
      <Text style={styles.infoText}>Lokasi: Jl. Contoh No. 123, Jakarta</Text>

      <View style={styles.socialLinks}>
        <Text style={styles.socialText}>Ikuti kami di:</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/fb.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/ig.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/tw.png')}
            style={styles.socialIcon}
          />
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
    width: width - 30,
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
    alignItems: 'center',
    marginRight: 20,
  },
  selectedCategoryItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6347',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
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
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
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
    color: '#333',
  },
  orderButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 14,
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

export default Home;
