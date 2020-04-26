import React from 'react';
// import { Image } from 'react-native';
import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom
} from './styles';
import { Markdown, Button, Image } from "../../components";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerTop>
        <Markdown title="hey max" fontSize={64} />
      </ContainerTop>
      <ContainerMiddle>
        <Button text="INICIAR" onPress={() => navigation.navigate('RegisterScreen')}
          backgroundColor="white"
          fontSize={36}
          heightSize="5%"
          widthSize="100%" />
      </ContainerMiddle>
      <ContainerBottom>
        <Image type="Feliz"
        />
      </ContainerBottom>
    </Container>
  );
};

export default WelcomeScreen;
