import React from 'react';
import {
    Container,
    ContainerTop,
    ContainerMiddle,
    ContainerBottom,
    ContainerEmail
} from './styles';
import { TouchableOpacity } from "react-native";
import { Markdown, Button, Image } from "../../../../components";
import { useNavigation } from '@react-navigation/native';
import { AppState } from '../../../../store/RootReducer';
import { useSelector } from 'react-redux';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ContainerTop>
                <Markdown title="hey max" fontSize={64} />
            </ContainerTop>
            <ContainerEmail>
                <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
                <TouchableOpacity style={{ marginTop: 16 }} onPress={() => { }}>
                    <Image type="Gmail" height={40} width={60} />
                </TouchableOpacity>
            </ContainerEmail>
            <ContainerMiddle>
                <Button text="INICIAR" onPress={() => navigation.navigate('RegisterScreen')}
                    backgroundColor="white"
                    fontSize={36}
                    heightSize={16}
                    widthSize={300} />
            </ContainerMiddle>
            <ContainerBottom>
                <Image type="Feliz"
                />
            </ContainerBottom>
        </Container>
    );
};

export default WelcomeScreen;




