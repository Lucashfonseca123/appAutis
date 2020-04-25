import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom
} from './styles';
import { Markdown, Button } from "../../components";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTop>
        <Markdown title="sadsa" />
      </ContainerTop>
      <ContainerMiddle>
        <Button text="INICIAR" onPress={() => null} backgroundColor="white" />
      </ContainerMiddle>
      <Image
        source={require('../../assets/max/Feliz.png')}
        style={{ width: '100%', height: '70%', }} />

    </Container>
  );
};

export default Home;
