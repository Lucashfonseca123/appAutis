import React, { useState, useRef } from 'react';
import {
  Container, ContainerTop, ContainerBottom,
  ContainerImage,
} from "./styles";
import { Button, Markdown, Card, TextField, Image, PopUp } from "../../components";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  return (
    <Container>
      <PopUp title="Olá, eu sou o max, serei seu amigo! Qual o seu nome?"
        width={49}
        posLeft={165}
        posTop={60}
        fontSize={14}
      />
      <ContainerImage>
        <Image type='FelizOrelhaDente' width={140} height={140} />
      </ContainerImage>
      <Card>
        <ContainerTop>
          <Markdown title={value} fontColor="#FFEC3F" />
        </ContainerTop>
        <TextField placeholder="Digite seu nome aqui..."
          textAlign="center"
          placeholderTextColor="#E8C82E"
          onChangeText={(text: string) => setValue(text)} marginBottom={5} />
      </Card>
      <ContainerBottom>
        <Button text="enviar"
          widthSize={120}
          heightSize={10}
          onPress={() => navigation.navigate('AvatarPresentationScreen')}
          fontSize={20}
        />
      </ContainerBottom>
    </Container>
  );
};

export default RegisterScreen;
