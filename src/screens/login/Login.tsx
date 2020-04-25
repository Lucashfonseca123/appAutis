import React, { useState } from 'react';
import { Text, Button, TouchableOpacity } from 'react-native';
import { Container, ContainerButton } from "./styles";
import { Card, TextField } from '../../components/';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  return (
    <Container>
      <Card>
        <Text style={{ textAlign: 'center', paddingBottom: 16, paddingTop: 16 }}>
          {value}
        </Text>
        <TextField
          label="Digite seu nome"
          width={200}
          onChangeText={(text: string) => setValue(text)}
        />
        <ContainerButton>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={{
              textShadowColor: 'rgba(0, 0, 0, 0.15)',
              textShadowOffset: { width: -0.5, height: 0.5 },
              fontFamily: 'SHOWG'
            }}>ENVIAR</Text>
          </TouchableOpacity>
        </ContainerButton>
      </Card>
    </Container>
    // </Modal>
  );
};

export default Login;
