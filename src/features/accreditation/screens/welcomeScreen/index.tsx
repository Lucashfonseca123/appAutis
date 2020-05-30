import React, {useState, useEffect} from 'react';
import {TouchableOpacity, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Markdown, Button, Image, Modal} from 'components';
import {AppState} from 'store/RootReducer';

import {loginRequest} from '../../redux/action/AuthActions';

import {GoogleSignin} from '@react-native-community/google-signin';

import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  ContainerEmail,
  DivButtonModal
} from './styles';

interface IUser {
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: false;
  metadata?: object;
  phoneNumber?: number;
  photoURL?: string;
  providerData?: object;
  providerId?: string;
  uid?: string;
}

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const dispatch = useDispatch();

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
      forceCodeForRefreshToken: true // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  });

  const showModal = () => {
    setVisibleModal(!visibleModal);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const logout = () => {
    BackHandler.exitApp();
  };

  const handleSignIn = () => {
    dispatch(loginRequest());
  };

  return (
    <Container>
      <ContainerTop>
        <Markdown title="hey max" fontSize={64} />
      </ContainerTop>
      <ContainerEmail>
        <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
        <TouchableOpacity
          style={{marginTop: 16}}
          onPress={() => handleSignIn()}>
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
