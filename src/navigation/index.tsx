import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import { HomeScreen } from '../screens/Home';
import Profile from '../screens/profile';
import { DataCards } from '../screens/DataCards/DataCards';
import About from '../screens/About/About';
import Dashboard from '../screens/Dashboard/Dashboard';
import HelpSupport from '../screens/HelpSupport/HelpSupport';
import Messages from '../screens/Messages/Messages';
import Notifications from '../screens/Notifications/Notifications';
import Register from '../screens/Register/Register';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
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

// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from '../screens/Login';
// import { HomeScreen } from '../screens/Home';
// import { ProfileTabs } from '../screens/profile';
// import { DataCards } from '../screens/DataCards/DataCards';
// import About from '../screens/About/About';
// import Dashboard from '../screens/Dashboard/Dashboard';
// import HelpSupport from '../screens/HelpSupport/HelpSupport';
// import Messages from '../screens/Messages/Messages';
// import Notifications from '../screens/Notifications/Notifications';
// import Register from '../screens/Register/Register';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { View, ActivityIndicator } from 'react-native';

// const Stack = createStackNavigator();

// export const AppNavigation = () => {
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     const token = await AsyncStorage.getItem('userToken');

//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }

//     setLoading(false);
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isLoggedIn ? (
//           <>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={ProfileTabs} />
//             <Stack.Screen name="DataCards" component={DataCards} />
//             <Stack.Screen name="About" component={About} />
//             <Stack.Screen name="Dashboard" component={Dashboard} />
//             <Stack.Screen name="HelpSupport" component={HelpSupport} />
//             <Stack.Screen name="Messages" component={Messages} />
//             <Stack.Screen name="Notifications" component={Notifications} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={Register} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
