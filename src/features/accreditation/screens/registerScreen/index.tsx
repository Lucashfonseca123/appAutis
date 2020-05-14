import React, { useState, useCallback } from 'react';
import {
    Container, ContainerTop, ContainerBottom,
    ContainerImage, ContainerPopUp
} from "./styles";
import { Button, Markdown, Card, TextField, Image, PopUp } from "../../../../components";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from "react-native";
import { useDispatch } from 'react-redux';
import { setUser } from "../../redux/action/AuthActions";

const RegisterScreen = () => {
    const [name, setName] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSetName = useCallback(() => {
        dispatch(setUser({ name: name, status: 0 }));
        navigation.navigate('AvatarPresentationScreen');
    }, [name]);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }
        } behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled >
            <Container>
                <ContainerPopUp>
                    <PopUp title="Olá, eu sou o max, serei seu amigo! Qual o seu nome?"
                        width={79}
                        posLeft={85}
                        posTop={40}
                        fontSize={18}
                    />
                </ContainerPopUp>
                < ContainerImage >
                    <Image type='FelizOrelhaDente' width={140} height={140} />
                </ContainerImage>
                < Card >
                    <ContainerTop>
                        <Markdown title={name} fontColor="#FFEC3F" />
                    </ContainerTop>
                    < TextField placeholder="Digite seu nome aqui..."
                        textAlign="center"
                        placeholderTextColor="#E8C82E"
                        onChangeText={(text: string) => setName(text)}
                        marginBottom={5}
                        keyboardType="default"
                    />
                </Card>
                < ContainerBottom >
                    <Button text="enviar"
                        widthSize={120}
                        heightSize={10}
                        onPress={() => handleSetName()}
                        fontSize={20}
                    />
                </ContainerBottom>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
