import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Head from './src/components/Head';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import PesquisaProduto from './src/screens/PesquisaProduto';
import EditarProduto from './src/screens/EditarProduto';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='EditarProduto' component={EditarProduto} options={{ headerShown: false }} />
    
        <Stack.Screen name='PesquisaProduto' component={PesquisaProduto} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
