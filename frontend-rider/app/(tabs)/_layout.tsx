import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: { backgroundColor: '#25292e' },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#25292e' },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'time' : 'time-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'heart' : 'heart-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            {/* Exclude getDriver from the tab bar */}
            <Tabs.Screen
                name="getDriver"
                options={{
                    tabBarStyle: { display: 'none' }, // Hide this screen from the tab bar
                }}
            />
            <Tabs.Screen
                name="getSplitDriver"
                options={{
                    tabBarStyle: { display: 'none' }, // Hide this screen from the tab bar
                }}
            />
        </Tabs>
    );
}
