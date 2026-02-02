import { View, Button } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
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
    </>
  );
};
