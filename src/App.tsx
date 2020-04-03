import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Game, Home, Login, Menu } from "./screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Primeira tela deu boa', headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Primeira tela deu boa', headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Menu}
          options={{
            title: 'Segunda tela deu boa',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: 'Terceira tela deu boa',
            headerShown: true,
            headerBackTitleStyle: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
