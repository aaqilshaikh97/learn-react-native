import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { LoginValidation } from './LoginValidation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  const baseURL = 'https://legal-api.faimsoft.com/auth/sign-in/';

  const handleLogin = async (values: { email: string; password: string }) => {
    console.log('email', values.email);
    console.log('password', values.password);
    console.log('baseURL', baseURL);

    try {
      const response = await axios.post(baseURL, {
        username: values.email,
        password: values.password,
      });

      console.log('Login Success:', response.data);
      const token = response.data.data.access;
      const name = response.data.data.account?.first_name;

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userName', name);
      navigation.replace('Home');
      Alert.alert('Success', 'Login successful');
    } catch (error: any) {
      console.error('Login Error:', error);
      console.log('FULL ERROR:', error.response?.data);

      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Forms & Validation (Formik + Yup)</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginValidation}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email */}
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000000"
              style={styles.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password */}
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000000"
              style={styles.input}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit as any}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',

    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '400',
  },
});
