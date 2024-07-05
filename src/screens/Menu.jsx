import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const categories = [
  { id: '1', name: 'Bakso' },
  { id: '2', name: 'Mie' },
  { id: '3', name: 'Minuman' },
];

const menuItems = [
  { id: '1', category: 'Bakso', name: 'Bakso Sapi', description: 'Bakso sapi dengan kuah gurih', price: 'Rp 15.000', image: 'https://link-to-bakso-sapi.png' },
  { id: '2', category: 'Mie', name: 'Mie Ayam', description: 'Mie ayam dengan topping ayam', price: 'Rp 20.000', image: 'https://link-to-mie-ayam.png' },
  { id: '3', category: 'Minuman', name: 'Es Teh', description: 'Es teh manis segar', price: 'Rp 5.000', image: 'https://link-to-es-teh.png' },
]; // Ganti dengan URL gambar dan deskripsi menu Anda

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Bakso');

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryButton, selectedCategory === item.name && styles.categoryButtonSelected]} 
      onPress={() => setSelectedCategory(item.name)}
    >
      <Text style={styles.categoryButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    if (item.category === selectedCategory) {
      return (
        <View style={styles.menuItem} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.menuImage} />
          <View style={styles.menuInfo}>
            <Text style={styles.menuName}>{item.name}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
            <Text style={styles.menuPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Tambah ke Keranjang</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
      <ScrollView style={styles.menuList}>
        {menuItems.filter(item => item.category === selectedCategory).map(item => renderItem({ item }))}
      </ScrollView>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryList: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonSelected: {
    backgroundColor: '#FF6347',
    borderColor: '#FF6347',
  },
  categoryButtonText: {
    color: '#000',
  },
  menuList: {
    paddingHorizontal: 10,
    marginBottom: 60, // Space for the "Pesan Sekarang" button
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  menuImage: {
    width: 100,
    height: 100,
  },
  menuInfo: {
    flex: 1,
    padding: 10,
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#777',
  },
  menuPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  orderButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
