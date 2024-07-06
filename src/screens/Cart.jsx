// CartScreen.js
import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    calculateTotal,
  } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>
          Rp {item.newPrice ? item.newPrice.toLocaleString() : '0'}
        </Text>
        <View style={styles.cartItemControls}>
          <TouchableOpacity
            style={styles.cartItemButton}
            onPress={() => decrementQuantity(item.id)}
          >
            <Text style={styles.cartItemButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.cartItemButton}
            onPress={() => incrementQuantity(item.id)}
          >
            <Text style={styles.cartItemButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeItemButton}
            onPress={() => removeItem(item.id)}
          >
            <Text style={styles.removeItemButtonText}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ubah agar keyExtractor menggunakan string
        style={styles.cartList}
      />
      <View style={styles.cartSummary}>
        <Text style={styles.cartTotalText}>
          Total: Rp {calculateTotal() ? calculateTotal().toLocaleString() : '0'}
        </Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartList: {
    marginBottom: 100, // Space for the cart summary at the bottom
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  cartItemImage: {
    width: 80,
    height: 80,
  },
  cartItemInfo: {
    flex: 1,
    padding: 10,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginVertical: 5,
  },
  cartItemControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cartItemButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cartItemQuantity: {
    fontSize: 16,
  },
  removeItemButton: {
    marginLeft: 10,
  },
  removeItemButtonText: {
    color: '#FF6347',
    fontSize: 14,
  },
  cartSummary: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  cartTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
