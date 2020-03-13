import React, { useState } from 'react';
import { Modal, Text, Button, View, Alert, Image } from 'react-native';

import {
  DivTitle,
  Container,
  DivTop,
  DivMiddle,
  DivBottom,
  ContainerModal,
  ContainerAvatar
} from './styles';
import TextField from '../../components/textField';

const Menu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState();
  const [value, setValue] = useState('');

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          alert('Ops, acho que você esquecer de digitar seu nome');
        }}>
        <Container>
          <View>
            <Text style={{ textAlign: 'center', paddingBottom: 20 }}>
              {value}
            </Text>
            <TextField
              label="Digite seu nome"
              width={200}
              onChangeText={(text: string) => setValue(text)}
            />
            <Button
              title="Some"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </Container>
      </Modal>
      <Text> Eu sou o Pedro, vou ser seu amigo!</Text>
      <ContainerAvatar>
        <Image source={require('../../assets/avatar/bebe.jpg')} style={{ width: 180, height: 250 }} />
      </ContainerAvatar>
      <Button
        title="Vamos lá!"
        onPress={() => {
          // setModalVisible(true);
          navigation.navigate('Game');
        }}
      />
    </Container>
  );
};

export default Menu;
