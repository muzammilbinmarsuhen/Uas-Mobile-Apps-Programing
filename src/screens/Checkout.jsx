import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from './CartContext';

const Checkout = ({route}) => {
  const { ringkasanPesanan } = route.params || {};

  if (!ringkasanPesanan) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tidak ada pesanan yang ditemukan</Text>
      </View>
    );
  }

  const calculateTotal = () => {
    return ringkasanPesanan.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const handleCheckout = () => {
    // Logika untuk proses checkout
    // Misalnya, validasi data, proses pembayaran, dll.
    Alert.alert('Pesanan Berhasil', 'Pesanan Anda telah diproses.', [
      {text: 'OK'},
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ringkasan Pesanan</Text>
      <View style={styles.orderSummaryContainer}>
        {ringkasanPesanan.map(item => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.orderItemText}>
              {item.name} x {item.quantity}
            </Text>
            <Text style={styles.orderItemText}>
              Rp {(item.price * item.quantity).toLocaleString()}
            </Text>
          </View>
        ))}
        <Text style={styles.orderTotalText}>
          Total Keseluruhan: Rp {calculateTotal().toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleCheckout}>
        <Text style={styles.confirmButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1C1',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFB52E',
  },
  orderSummaryContainer: {
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  orderItemText: {
    fontSize: 16,
    color: '#000',
  },
  orderTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: '#FFB52E',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Checkout;
