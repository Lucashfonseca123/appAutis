import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerBottom,
  ContainerTop,
  Titulo,
  TituloBotao
} from './styles';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/default.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <Container>
        <ContainerTop>
          <Titulo>Vamos jogar?</Titulo>
        </ContainerTop>
        <ContainerBottom>
          <TouchableHighlight
            onPress={() => navigation.navigate('Details')}
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            activeOpacity={0.7}
            delayLongPress={1000}
            underlayColor="yellow">
            <ContainerButton>
              <TituloBotao>Vamos!</TituloBotao>
            </ContainerButton>
          </TouchableHighlight>
        </ContainerBottom>
      </Container>
    </ImageBackground>
  );
};

export default Home;
