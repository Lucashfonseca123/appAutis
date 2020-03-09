import React, {useState} from 'react';
import {Modal, Text, Button, View, Alert} from 'react-native';

import {
  DivTitle,
  Container,
  DivTop,
  DivMiddle,
  DivBottom,
  ContainerModal,
} from './styles';
import TextField from '../../components/textField';

const Menu = () => {
  const [modalVisible, setModalVisible] = useState();
  const [value, setValue] = useState('');

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Container>
          <View>
            <Text style={{textAlign: 'center', paddingBottom: 20}}>
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
      <Button
        title="Apareça"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Text>Show Modal</Text>
    </Container>
  );
};

export default Menu;
