import React, { useState, useEffect } from 'react';
import {
    Container,
    ContainerTop,
    ContainerMiddle,
    ContainerBottom,
    ContainerEmail,
    DivButtonModal
} from './styles';
import { TouchableOpacity, BackHandler } from "react-native";
import { Markdown, Button, Image, TextField, Modal } from "components";
import { useNavigation } from '@react-navigation/native';
import { AppState } from "store/RootReducer";
import auth from "@react-native-firebase/auth";
import { useSelector } from 'react-redux';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const isName = useSelector(
        (appState: AppState) => appState.AccreditFeature.accreditReducer.name,
    );

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                showModal();
                return true;
            },
        );
    }, []);

    const handleSignIn = async () => {
        const response = await auth().signInWithEmailAndPassword(name, password);
        console.log(response);
    }

    const showModal = () => {
        setVisibleModal(!visibleModal);
    }

    const closeModal = () => {
        setVisibleModal(false);
    }

    const logout = () => {
        BackHandler.exitApp();
    }

    return (
        <Container>
            <ContainerTop>
                <Markdown title="hey max" fontSize={64} />
            </ContainerTop>
            {/* <TextField placeholder="Nome" onChangeText={(text) => setName(text)} />
            <TextField placeholder="Senha" onChangeText={(text) => setPassword(text)} />
            <Button text="Clique aqui" fontSize={20} onPress={handleSignIn} /> */}
            <ContainerEmail>
                <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
                <TouchableOpacity style={{ marginTop: 16 }} onPress={() => { }}>
                    <Image type="Gmail" height={40} width={60} />
                </TouchableOpacity>
            </ContainerEmail>
            <ContainerMiddle>
                <Button text="INICIAR" onPress={() => {
                    if (isName !== "") {
                        navigation.navigate('MenuScreen')
                    } else {
                        navigation.navigate('RegisterScreen')
                    }
                }
                }
                    backgroundColor="white"
                    fontSize={36}
                    heightSize={16}
                    widthSize={300} />
            </ContainerMiddle>
            <ContainerBottom>
                <Image type="Feliz"
                />
            </ContainerBottom>
            <Modal isVisible={visibleModal} closeModal={closeModal} typeMax="TristeChoro">
                <Markdown title="Deseja sair?" fontColor="#FFEF60" />
                <DivButtonModal>
                    <Button text="Não" onPress={() => closeModal()} widthSize={100} heightSize={10} fontSize={20} />
                    <Button text="Sim" onPress={() => logout()} widthSize={100} heightSize={10} fontSize={20} />
                </DivButtonModal>
            </Modal>
        </Container>
    );
};

export default WelcomeScreen;




