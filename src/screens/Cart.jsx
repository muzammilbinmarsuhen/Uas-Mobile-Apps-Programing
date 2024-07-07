import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from './CartContext';

const Cart = () => {
  const {cartItems} = useContext(CartContext);
  const navigation = useNavigation();

  const handleCheckoutNavigation = () => {
    if (cartItems.length > 0) {
      navigation.navigate('Checkout', {ringkasanPesanan: cartItems});
    } else {
      Alert.alert(
        'Keranjang Kosong',
        'Tidak ada barang di keranjang untuk di-checkout.',
        [{text: 'OK'}],
      );
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString('id-ID');
  };

  // Data untuk tabel kupon
  const couponData = [['Kupon Saya', 'FREEDELV']];

  // Konfigurasi tabel kupon
  const couponTableConfig = {
    tableHead: ['Deskripsi', 'Kode'],
    tableData: couponData,
  };

  // Konfigurasi tabel total
  const totalTableConfig = {
    tableHead: ['Total'],
    tableData: [[`Rp ${calculateTotal()}`]],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Keranjang Belanja</Text>
        <Image
          source={require('../assets/Splash/babe.png')}
          style={styles.headerImage}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Jumlah: {item.quantity}</Text>
            </View>
            <Text style={styles.itemPrice}>
              Rp {(item.price * item.quantity).toLocaleString('id-ID')}
            </Text>
          </View>
        )}
      />
      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Kupon Saya</Text>
        <Text style={styles.couponCode}>FREEDELV</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>Rp {calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckoutNavigation}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0F7E0',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  couponText: {
    fontSize: 16,
    color: '#2ECC71',
  },
  couponCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ECC71',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
