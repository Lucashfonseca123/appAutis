import React from 'react';
import { View, Text, Button } from 'react-native';
import { Container, DivButton, DivTop } from './styles';

const Game = () => {
  return (
    <Container>
      {/* <Text>asdsadas</Text> */}
      <DivTop>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Vamos aprender sobre figurar geométricas </Text>
      </DivTop>
      <DivButton>
        <Button title="Triangulo" onPress={() => null} color="orange" />
        <Button title="Circulo" onPress={() => null} color="orange" />
        <Button title="Quadrado" onPress={() => null} color="orange" />
      </DivButton>
    </Container>
  );
};

export default Game;
