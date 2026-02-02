import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import HelpSupport from '../HelpSupport/HelpSupport';

const Tab = createBottomTabNavigator();

export const ProfileTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="HelpSupport" component={HelpSupport} />
    </Tab.Navigator>
  );
};
