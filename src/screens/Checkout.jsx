import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

const orderSummary = [
  {id: '1', name: 'Bakso Sapi', quantity: 2, price: 15000},
  {id: '2', name: 'Mie Ayam', quantity: 1, price: 20000},
]; // Ganti dengan ringkasan pesanan Anda

const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const calculateTotal = () => {
    return orderSummary.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const confirmOrder = () => {
    if (name && address && phone && paymentMethod) {
      Alert.alert('Pesanan Berhasil', 'Pesanan Anda telah diproses.', [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert('Error', 'Harap lengkapi semua informasi.');
    }
  };

  const renderOrderItem = ({item}) => (
    <View style={styles.orderItem} key={item.id}>
      <Text style={styles.orderItemText}>
        {item.name} x{item.quantity}
      </Text>
      <Text style={styles.orderItemText}>Rp {item.price.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Informasi Pelanggan</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.headerText}>Metode Pembayaran</Text>
      <View>
        {['Cash', 'Transfer'].map((method, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paymentButton,
              paymentMethod === method && styles.paymentButtonSelected,
            ]}
            onPress={() => setPaymentMethod(method)}>
            <Text style={styles.paymentButtonText}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.headerText}>Ringkasan Pesanan</Text>
      <FlatList
        data={orderSummary}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        style={styles.orderSummary}
      />
      <Text style={styles.totalText}>
        Total: Rp {calculateTotal().toLocaleString()}
      </Text>

      <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
        <Text style={styles.confirmButtonText}>Konfirmasi Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  paymentButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
  },
  paymentButtonSelected: {
    borderColor: '#FF6347',
  },
  paymentButtonText: {
    color: '#000',
    fontSize: 16,
  },
  orderSummary: {
    marginVertical: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  orderItemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
