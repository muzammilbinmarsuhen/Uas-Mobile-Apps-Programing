import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    
    const delay = setTimeout(() => {
      navigation.replace('Tab'); 
    }, 2000); 

   
    StatusBar.setHidden(true);

   
    return () => clearTimeout(delay);
  }, []);

  return (
    <View style={styles.container}>
      {/* Tambahkan gambar atau logo di bawah ini */}
      <Image
        style={styles.logo}
        source={require('../assets/Splash/babe.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347', // Ganti dengan warna latar belakang yang diinginkan
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20, // Sesuaikan jaraknya sesuai keinginan
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Sesuaikan warna teks
  },
});

export default Splash; // Pastikan diekspor secara default
