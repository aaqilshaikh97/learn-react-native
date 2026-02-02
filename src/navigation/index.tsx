import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../screens/Login';
import { HomeScreen } from '../screens/Home';
import { ProfileTabs } from '../screens/profile';
import { DataCards } from '../screens/DataCards/DataCards';
import About from '../screens/About/About';
import Dashboard from '../screens/Dashboard/Dashboard';
import HelpSupport from '../screens/HelpSupport/HelpSupport';
import Messages from '../screens/Messages/Messages';
import Notifications from '../screens/Notifications/Notifications';
import Register from '../screens/Register/Register';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DataCards" component={DataCards} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
