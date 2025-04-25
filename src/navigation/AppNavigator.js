// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importação das telas
import WelcomeScreen from '../screens/WelcomeScreen';
import LessonsScreen from '../screens/LessonsScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';
import DemoScreen from '../screens/DemoScreen';

// Criação dos navegadores
const Tab = createBottomTabNavigator();
const LessonsStack = createStackNavigator();

// Navegador de pilha para as lições
const LessonsStackNavigator = () => {
  return (
    <LessonsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#121212' }
      }}
    >
      <LessonsStack.Screen 
        name="Lições" 
        component={LessonsScreen} 
      />
      <LessonsStack.Screen 
        name="LessonDetail" 
        component={LessonDetailScreen}
        options={{ headerShown: false }}
      />
    </LessonsStack.Navigator>
  );
};

// Navegador principal com abas
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Bem-vindo') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Lições') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Demo') {
              iconName = focused ? 'flask' : 'flask-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#757575',
          tabBarStyle: {
            backgroundColor: '#1E1E1E',
            borderTopColor: '#424242',
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          }
        })}
      >
        <Tab.Screen name="Bem-vindo" component={WelcomeScreen} />
        <Tab.Screen name="Lições" component={LessonsStackNavigator} />
        <Tab.Screen name="Demo" component={DemoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;