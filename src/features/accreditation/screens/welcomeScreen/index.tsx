import React, {useState, useEffect} from 'react';
import {TouchableOpacity, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {Markdown, Button, Image, Modal, TextField} from 'components';
import {AppState} from 'store/RootReducer';
import firestore from '@react-native-firebase/firestore';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  ContainerEmail,
  DivButtonModal,
} from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const isName = useSelector(
    (appState: AppState) => appState.AccreditFeature.accreditReducer.name
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        showModal();
        return true;
      }
    );
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '562929892594-0sl2apna4kk7joc8skrkn3cqksb2pk6b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  });

  const handleSignIn = async () => {
    const response = await auth().signInWithEmailAndPassword(name, password);
    console.log(response);
  };

  const showModal = () => {
    setVisibleModal(!visibleModal);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const logout = () => {
    BackHandler.exitApp();
  };

  const sendWithGmail = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const [todo, setTodo] = useState('');
  const ref = firestore().collection('todos');

  async function addTodo() {
    await ref.add({
      title: 'Agora to aqui ',
      complete: false
    });
    console.log('To aqui');
    setTodo('');
  }

  return (
    <Container>
      <ContainerTop>
        <Markdown title="hey max" fontSize={64} />
      </ContainerTop>
      <TextField placeholder="Nome" onChangeText={(text) => setName(text)} />
      <TextField
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
      />
      <Button text="Clique aqui" fontSize={20} onPress={() => addTodo()} />
      <ContainerEmail>
        <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
        <TouchableOpacity
          style={{marginTop: 16}}
          onPress={() => sendWithGmail()}>
          <Image type="Gmail" height={40} width={60} />
        </TouchableOpacity>
      </ContainerEmail>
      <ContainerMiddle>
        <Button
          text="INICIAR"
          onPress={() => {
            if (isName !== '') {
              navigation.navigate('MenuScreen');
            } else {
              navigation.navigate('RegisterScreen');
            }
          }}
          backgroundColor="white"
          fontSize={36}
          heightSize={16}
          widthSize={300}
        />
      </ContainerMiddle>
      <ContainerBottom>
        <Image type="Feliz" />
      </ContainerBottom>
      <Modal
        isVisible={visibleModal}
        closeModal={closeModal}
        typeMax="TristeChoro">
        <Markdown title="Deseja sair?" fontColor="#FFEF60" />
        <DivButtonModal>
          <Button
            text="Não"
            onPress={() => closeModal()}
            widthSize={100}
            heightSize={10}
            fontSize={20}
          />
          <Button
            text="Sim"
            onPress={() => logout()}
            widthSize={100}
            heightSize={10}
            fontSize={20}
          />
        </DivButtonModal>
      </Modal>
    </Container>
  );
};

export default WelcomeScreen;
