import React, { useState } from 'react';
import { Container, ContainerTop, ContainerBottom, ContainerImage } from "./styles";
import { Button, Markdown, Card, TextField, Image } from "../../components";
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';

const RegisterScreen = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  return (
    <Container>
      <Image type='FelizOrelhaDente' width={200} height={10} />

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
        <Button text="enviar" widthSize="50%" heightSize="3%" onPress={() => null} fontSize={18} />
      </ContainerBottom>
    </Container>
  );
};

export default RegisterScreen;
