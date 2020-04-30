import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    PlayerScreen,
    WelcomeScreen,
    RegisterScreen,
    AvatarPresentationScreen,
    MenuScreen,
    ConfigurationScreen
} from "../screens";

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{ title: 'Primeira tela deu boa', headerShown: false }}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ title: 'Primeira tela deu boa', headerShown: false }}
                />
                <Stack.Screen
                    name="AvatarPresentationScreen"
                    component={AvatarPresentationScreen}
                    options={{
                        title: 'Segunda tela deu boa',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PlayerScreen"
                    component={PlayerScreen}
                    options={{
                        title: ' ',
                        headerShown: true,
                        headerBackTitleStyle: 'center'
                    }}
                />
                <Stack.Screen
                    name="MenuScreen"
                    component={MenuScreen}
                    options={{
                        title: '',
                        headerShown: true,
                        headerBackTitleStyle: 'center'
                    }}
                />
                <Stack.Screen
                    name="ConfigurationScreen"
                    component={ConfigurationScreen}
                    options={{
                        title: '',
                        headerShown: true,
                        headerBackTitleStyle: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
