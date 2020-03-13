import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerBottom,
  ContainerTop,
} from './styles';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/default.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <Container>
        <ContainerTop>
          <Text
            style={{
              paddingBottom: 20,
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'Cochin',
            }}>
            Vamos jogar?
          </Text>
        </ContainerTop>
        <ContainerBottom>
          <TouchableHighlight
            onPress={() => navigation.navigate('Details')}
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              backgroundColor: 'yellow',
            }}
            underlayColor="white">
            <ContainerButton>
              <Text>INICIAR</Text>
            </ContainerButton>
          </TouchableHighlight>
        </ContainerBottom>
      </Container>
    </ImageBackground>
  );
};

export default Home;
