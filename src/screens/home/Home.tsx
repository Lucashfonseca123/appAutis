import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerTop,
  Titulo,
  TituloBotao
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/default.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <Container>
        <ContainerTop>
          <Titulo style={{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10
          }}>Vamos jogar?</Titulo>
        </ContainerTop>
        <ContainerButton style={{
          shadowColor: "#000",
          elevation: 3,
        }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
            <TituloBotao style={{
              textShadowColor: 'rgba(0, 0, 0, 0.15)',
              textShadowOffset: { width: -0.5, height: 0.5 },
            }}>Vamos!</TituloBotao>
          </TouchableOpacity>
        </ContainerButton>
      </Container>
    </ImageBackground >
  );
};

export default Home;
