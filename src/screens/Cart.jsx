import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {item && (
        <View style={styles.cartItem}>
          <Text>{item.name}</Text>
          <Text>{item.newPrice || item.price}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CartScreen;
