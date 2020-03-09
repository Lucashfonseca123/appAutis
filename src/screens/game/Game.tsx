import React from 'react';
import {View, Text, Button} from 'react-native';
import {Container, DivButton, DivTop} from './styles';

const Game = () => {
  return (
    <Container>
      {/* <Text>asdsadas</Text> */}
      <DivTop>
        <Text> </Text>
      </DivTop>
      <DivButton>
        <Button title="Botão 1" onPress={() => null} />
        <Button title="Botão 2" onPress={() => null} />
        <Button title="Botão 3" onPress={() => null} />
      </DivButton>
    </Container>
  );
};

export default Game;
