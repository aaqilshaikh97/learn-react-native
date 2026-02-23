import { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Alert, Text, } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  About: undefined;
  Dashboard: undefined;
  DataCards: undefined;
  HelpSupport: undefined;
  Login: undefined;
  Messages: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export const HomeScreen = () => {
  const [name, setName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const storedName = await AsyncStorage.getItem('userName');
    const storedToken = await AsyncStorage.getItem('userToken');

    setName(storedName);
    setToken(storedToken);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.clear()

    Alert.alert('Logged Out', 'You have been logged out');
    navigation.navigate('Login');
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View style={style.buttonFullWidth}>
        <Button
          title="HelpSupport"
          color="#668cff"
          onPress={() => {
            navigation.navigate('HelpSupport');
          }}
        />
      </View>
      <View style={style.buttonFullWidth}>
        <Button
          title="Login"
          color="#009933"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="About"
          color="#b30000"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="Dashboard"
          color="#668cff"
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="DataCards"
          color="#009933"
          onPress={() => {
            navigation.navigate('DataCards');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="Messages"
          color="#b30000"
          onPress={() => {
            navigation.navigate('Messages');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="Notifications"
          color="#668cff"
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        />
      </View>

      <View style={style.buttonFullWidth}>
        <Button
          title="Profile"
          color="#009933"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>

      <View style={styles.userConatiner}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Token:</Text>
        <Text style={styles.token}>{token}</Text>
        <Button title="Logout" color="#009933" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  token: {
    fontSize: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  userConatiner: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});
