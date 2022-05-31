import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Sobre from '../screens/SobreNos';

const Tab = createBottomTabNavigator();

export default function RouteTabs() {
  return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'ios-informatoutline';            
            }
            else if (route.name === 'Sobre') {
              iconName = focused ? 'construct-outline' : 'construct';
            }

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Sobre}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

