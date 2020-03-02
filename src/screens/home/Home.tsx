import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerBottom,
  ContainerTop,
} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <ContainerTop>
        <Text style={{paddingBottom: 20, fontWeight: 'bold', fontSize: 20}}>
          Bem vindo, bora jogar?
        </Text>
      </ContainerTop>
      <ContainerBottom>
        <ContainerButton>
          <Button
            title="Agora ou ja?"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            title="To de boas"
            onPress={() => alert('Faz parte, volte sempre')}
          />
        </ContainerButton>
      </ContainerBottom>
    </Container>
  );
};

export default Home;
