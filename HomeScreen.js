import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Icons for tab navigation
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import SupportScreen from './SupportScreen'; // New Support Screen

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Support') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          // Return the appropriate Ionicons component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ea',  // Active tab color (Purple)
        tabBarInactiveTintColor: '#555',    // Inactive tab color (Gray)
        tabBarStyle: {
          backgroundColor: '#f8f9fa',       // Tab bar background color (Light Gray)
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,                       // Increase height for a modern look
        },
        tabBarLabelStyle: {
          fontSize: 12,                     // Font size of labels
          fontWeight: 'bold',               // Bold labels
        },
      })}
    >
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Support" 
        component={SupportScreen} 
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
