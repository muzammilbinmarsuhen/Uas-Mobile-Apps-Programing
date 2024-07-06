import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
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
      <Image
        style={styles.logo}
        source={require('../assets/Splash/babe.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>Sabar Ini Ujian</Text>
      <ActivityIndicator size="large" color="#000" style={{marginTop: 16}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Lato',
  },
});

export default Splash;
