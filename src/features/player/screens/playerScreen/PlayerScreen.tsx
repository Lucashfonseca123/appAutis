import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  Container, DivButton,
  DivMiddle, DivTop,
  DivImage, DivButtonModal
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button, Markdown, Image, Modal } from "../../../../components";
import { headerComposer, Header } from '../../../../navigation/NavigationMixins';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/RootReducer';
import obj from "./object/objects.json";

const PlayerScreen = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [messageButton, setMessageButton] = useState('');

  const userName = useSelector(
    (appState: AppState) => appState.AccreditFeature.accreditReducer.name,
  );

  navigation.setOptions(headerComposer({
    leftComponent: Header.BackButton(() => navigation.goBack()),
    backgroundColor: '#FFEF60',
    rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
  }));

  const showModal = (type: number) => {
    setVisibleModal(true);

    if (type === 3) {
      setMessage('Parabens, você acertou!');
      setSubtitle('');
      setMessageButton('Próximo');
    }
    else {
      setMessage('Ops, foi por pouco.');
      setSubtitle('Tente novamente');
      setMessageButton('Tentar de novo');
    }

  }

  const closeModal = () => {
    setVisibleModal(false);
  }

  return (
    <Container>
      <DivTop>
        <Markdown title={`Qual figura é essa ${userName}?`} fontSize={24} />
        <DivImage>
          <Image type="Confuso" width={140} height={160} />
        </DivImage>
      </DivTop>
      <DivMiddle>
        <Image type={obj.geometricFigures.type1} height={200} width={200} />
      </DivMiddle>
      <DivButton>
        <Button text="Triangulo" onPress={() => showModal(1)} fontSize={14} heightSize={10} widthSize={95} />
        <Button text="Circulo" onPress={() => showModal(2)} fontSize={14} heightSize={10} widthSize={95} />
        <Button text="Quadrado" onPress={() => showModal(3)} fontSize={14} heightSize={10} widthSize={95} />
      </DivButton>
      <Modal isVisible={visibleModal} closeModal={closeModal} typeMax={messageButton === 'Próximo' ? 'FelizOrelhaBaixoDente' : "Feliz"}>
        <Markdown title={message} fontColor="#FFEF60" fontSize={22} />
        <Markdown title={subtitle} fontColor="#FFEF60" fontSize={22} />
        <DivButtonModal noPadding={messageButton === 'Próximo' ? true : false}>
          <Button text="Menu" onPress={() => navigation.navigate('MenuScreen')} widthSize={110} heightSize={10} fontSize={16} />
          <Button text={messageButton} onPress={() => closeModal()} widthSize={160} heightSize={10} fontSize={16} />
        </DivButtonModal>
      </Modal>
    </Container>
  );
};

export default PlayerScreen;
