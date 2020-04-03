import React, { Component, useState } from 'react';
import { Modal, Text, Button, View, Alert, Image, Animated, StyleSheet } from 'react-native';

import {
  DivTitle,
  Container,
  DivTop,
  DivMiddle,
  DivBottom,
  ContainerModal,
  ContainerAvatar
} from './styles';


class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}


const Menu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState();
  const [value, setValue] = useState('');

  return (
    <Container>
      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          alert('Ops, acho que você esqueceu de digitar seu nome');
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
              title="Aceitar"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </Container>
      </Modal> */}
      <Text> Fala {value}, eu sou o Pedro, vou ser o seu amigo!</Text>
      <ContainerAvatar>
        {/* <Image source={require('../../assets/avatar/bebe.png')} style={{ width: 180, height: 250 }} /> */}
        <ImageLoader
          style={styles.image}
          source={require('../../assets/avatar/bebe.png')}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180, height: 250
  },
});