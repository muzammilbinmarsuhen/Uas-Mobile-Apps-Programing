import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const initialBaksoItems = [
  {
    id: '1',
    name: 'Bakso Sapi',
    rating: 4,
    oldPrice: 'Rp 25.000',
    newPrice: 'Rp 20.000',
    image: require('../assets/menu/1.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '2',
    name: 'Bakso Ayam',
    rating: 5,
    oldPrice: 'Rp 30.000',
    newPrice: 'Rp 25.000',
    image: require('../assets/menu/2.jpeg'),
    delivery: 'Express Delivery (Tomorrow morning)',
  },
  {
    id: '3',
    name: 'Bakso Ikan',
    rating: 3,
    price: 'Rp 22.000',
    image: require('../assets/menu/3.jpeg'),
    delivery: 'Express Delivery (Tomorrow morning)',
  },
  {
    id: '4',
    name: 'Bakso Urat',
    rating: 4,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/4.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '5',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/5.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '6',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/6.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '7',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/7.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '8',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/8.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '9',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/9.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '10',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/10.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '11',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/11.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '12',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/12.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '13',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/13.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '14',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/14.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '15',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/15.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '16',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/16.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '17',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/17.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '18',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/18.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '19',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/19.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '20',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/20.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
  {
    id: '21',
    name: 'Bakso Urat',
    rating: 3,
    oldPrice: 'Rp 28.000',
    newPrice: 'Rp 23.000',
    image: require('../assets/menu/21.jpeg'),
    delivery: 'Standard Delivery (Tomorrow evening)',
  },
];

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [baksoItems, setBaksoItems] = useState(initialBaksoItems);
  const navigation = useNavigation();

  const categories = ['All', 'Breakfast', 'Lunch', 'Treats', 'Dessert'];

  const handleStarPress = id => {
    setBaksoItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, rating: Math.min(item.rating + 1, 5)} : item,
      ),
    );
  };

  const renderStars = (rating, id) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(id)}>
          <Text style={styles.star}>{i < rating ? '★' : '☆'}</Text>
        </TouchableOpacity>,
      );
    }
    return <View style={styles.starContainer}>{stars}</View>;
  };
  const handleAddToCart = item => {
    // Add item to cart logic here
    navigation.navigate('Cart', {item});
  };
  const renderBaksoItem = ({ item }) => (
    <View style={styles.productItem} key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        {renderStars(item.rating, item.id)}
        <View style={styles.productPriceContainer}>
          {item.oldPrice && (
            <Text style={styles.productOldPrice}>{item.oldPrice}</Text>
          )}
          <Text style={styles.productNewPrice}>
            {item.newPrice || item.price}
          </Text>
        </View>
        <Text style={styles.productDelivery}>{item.delivery}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.categoryList} horizontal>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.selectedCategoryButtonText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={baksoItems}
        renderItem={renderBaksoItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 15,
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedCategoryButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6347',
  },
  categoryButtonText: {
    color: '#333',
  },
  selectedCategoryButtonText: {
    color: '#FF6347',
  },
  productList: {
    paddingBottom: 10,
  },
  productItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 6, // decreased margin to reduce size
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 8, // decreased padding to reduce size
    maxWidth: '48%', // reduced width
  },
  productImage: {
    width: '100%',
    height: 130, // decreased image size
    borderRadius: 10,
  },
  productInfo: {
    marginTop: 8, // decreased margin to reduce size
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    fontSize: 14,
    color: '#FFD700',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  productOldPrice: {
    fontSize: 12,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  productNewPrice: {
    fontSize: 14,
    color: '#FF6347',
  },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  productDelivery: {
    fontSize: 10,
    color: '#777',
  },
});

export default MenuScreen;
