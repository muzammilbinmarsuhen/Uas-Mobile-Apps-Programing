import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

const Checkout = ({route}) => {
  const {ringkasanPesanan} = route.params || {};
  const [selectedAddress, setSelectedAddress] = useState('rumah');
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState('kartuKredit');
  const [homeAddress, setHomeAddress] = useState({phone: '', address: ''});
  const [officeAddress, setOfficeAddress] = useState({phone: '', address: ''});

  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

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
    Alert.alert('Pesanan Berhasil', 'Pesanan Anda telah diproses.', [
      {text: 'OK'},
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeaderText}>Delivery to</Text>
      <View style={styles.addressContainer}>
        <TouchableOpacity
          style={[
            styles.addressOption,
            selectedAddress === 'rumah' && styles.selectedOption,
          ]}
          onPress={() => setSelectedAddress('rumah')}>
          <View style={styles.radioButtonContainer}>
            <View
              style={[
                styles.radioButton,
                selectedAddress === 'rumah' && styles.radioButtonSelected,
              ]}
            />
          </View>
          <View style={styles.addressDetails}>
            <Text style={styles.addressText}>Home</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputNoBorder}
                placeholder="Phone Number"
                value={homeAddress.phone}
                onChangeText={text =>
                  setHomeAddress({...homeAddress, phone: text})
                }
                keyboardType="numeric"
              />
              <TextInput
                style={styles.inputNoBorder}
                placeholder="Address"
                value={homeAddress.address}
                onChangeText={text =>
                  setHomeAddress({...homeAddress, address: text})
                }
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressOption,
            selectedAddress === 'kantor' && styles.selectedOption,
          ]}
          onPress={() => setSelectedAddress('kantor')}>
          <View style={styles.radioButtonContainer}>
            <View
              style={[
                styles.radioButton,
                selectedAddress === 'kantor' && styles.radioButtonSelected,
              ]}
            />
          </View>
          <View style={styles.addressDetails}>
            <Text style={styles.addressText}>Office</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputNoBorder}
                placeholder="Phone Number"
                value={officeAddress.phone}
                onChangeText={text =>
                  setOfficeAddress({...officeAddress, phone: text})
                }
                keyboardType="numeric"
              />
              <TextInput
                style={styles.inputNoBorder}
                placeholder="Address"
                value={officeAddress.address}
                onChangeText={text =>
                  setOfficeAddress({...officeAddress, address: text})
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeaderText}>Payment Method</Text>
      <ScrollView
        style={styles.paymentContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === 'kartuKredit' &&
              styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPaymentMethod('kartuKredit')}>
          <View style={styles.paymentLogoContainer}>
            <Image
              source={require('../assets/Payment/2.png')}
              style={styles.paymentLogo}
            />
            <Text style={styles.paymentText}>Credit Card</Text>
          </View>
          <View
            style={[
              styles.circle,
              selectedPaymentMethod === 'kartuKredit' && styles.selectedCircle,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === 'paypal' && styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPaymentMethod('paypal')}>
          <View style={styles.paymentLogoContainer}>
            <Image
              source={require('../assets/Payment/3.png')}
              style={styles.paymentLogo}
            />
            <Text style={styles.paymentText}>PayPal</Text>
          </View>
          <View
            style={[
              styles.circle,
              selectedPaymentMethod === 'paypal' && styles.selectedCircle,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === 'googlePay' &&
              styles.selectedPaymentOption,
          ]}
          onPress={() => setSelectedPaymentMethod('googlePay')}>
          <View style={styles.paymentLogoContainer}>
            <Image
              source={require('../assets/Payment/1.png')}
              style={styles.paymentLogo}
            />
            <Text style={styles.paymentText}>Google Pay</Text>
          </View>
          <View
            style={[
              styles.circle,
              selectedPaymentMethod === 'googlePay' && styles.selectedCircle,
            ]}
          />
        </TouchableOpacity>
      </ScrollView>

      {selectedPaymentMethod === 'kartuKredit' && (
        <ScrollView style={styles.paymentDetails}>
          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            value={cardholderName}
            onChangeText={setCardholderName}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Expiration Date"
              value={expiration}
              onChangeText={setExpiration}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
            />
          </View>
        </ScrollView>
      )}

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Delivery Fee: Rp 30.000</Text>
        <Text style={styles.summaryText}>
          Subtotal: Rp {calculateTotal().toLocaleString()}
        </Text>
        <Text style={styles.totalText}>
          Total: Rp {(calculateTotal() + 30000).toLocaleString()}
        </Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleCheckout}>
        <Text style={styles.confirmButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  addressContainer: {
    marginBottom: 10,
  },
  addressOption: {
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 20,
    width: '99%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  selectedOption: {},
  addressText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  radioButtonContainer: {
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  radioButtonSelected: {
    backgroundColor: '#FFB52E',
  },
  addressDetails: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'column', // Changed to column for vertical layout
    alignItems: 'center', // Align items to start of column
  },
  inputNoBorder: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#000',
    marginBottom: 10,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  smallInput: {
    width: '80%',
  },
  paymentContainer: {
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  selectedPaymentOption: {},
  selectedCircle: {
    backgroundColor: '#FFB52E',
    borderColor: '#FFB52E',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  paymentLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentLogo: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#000',
  },
  paymentDetails: {
    marginBottom: 20,
    maxHeight: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSmall: {
    width: '45%',
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: '#ccc',
    padding: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#000',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Checkout;
