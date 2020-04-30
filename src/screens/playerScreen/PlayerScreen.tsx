import React from 'react';
import { View, Text } from 'react-native';
import { Container, DivButton, DivMiddle, DivTop, DivImage } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button, Markdown, Image } from "../../components";
import { headerComposer, Header } from '../../navigation/NavigationMixins';

const PlayerScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(headerComposer({
    leftComponent: Header.BackButton(() => navigation.goBack()),
    backgroundColor: '#FFEF60',
    rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
  }));

  return (
    <Container>
      <DivTop>
        <Markdown title="Qual figura é essa?" fontSize={24} />
        <DivImage>
          <Image type="Confuso" width={140} height={160} />
        </DivImage>
      </DivTop>
      <DivMiddle>
        <Image type="FelizOrelhaDente" height={200} width={200} />
      </DivMiddle>
      <DivButton>
        <Button text="Triangulo" onPress={() => null} fontSize={14} heightSize={10} widthSize={95} />
        <Button text="Circulo" onPress={() => null} fontSize={14} heightSize={10} widthSize={95} />
        <Button text="Quadrado" onPress={() => null} fontSize={14} heightSize={10} widthSize={95} />
      </DivButton>
    </Container>
  );
};

export default PlayerScreen;
