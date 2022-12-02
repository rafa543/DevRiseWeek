import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#000000' },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Pesquisar') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (route.name === 'Favoritos') {
                            iconName = focused ? 'search' : 'search-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Pesquisar" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Favoritos" component={Home} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}