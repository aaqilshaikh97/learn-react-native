import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { profile } from '../../const/const';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (userToken) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(profile, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });

          console.log('profile:', response.data);
          setUserDetails(response.data?.data?.account);
        } catch (error) {
          console.log('error', error);
        }
      };
      fetchProfile();
    }
  }, [userToken]);

  if (!userDetails) {
    return (
      <View style={styles.pageContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>Profile</Text>

      <Image
        style={styles.profilePic}
        source={{ uri: userDetails.pic }}
        resizeMode="cover"
      />
      <Text>
        User name: {userDetails.first_name} {userDetails.last_name || '-'}
      </Text>
      <Text>Mobile: {userDetails.mobile || '-'}</Text>
      <Text>Email: {userDetails.email || '-'}</Text>
      <Text>Address: {userDetails.address || '-'}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeading: {
    fontSize: 30,
    fontWeight: '600',
  },
  profilePic: {
    height: 200,
    width: 150,
    borderRadius: 16,
  },
});
