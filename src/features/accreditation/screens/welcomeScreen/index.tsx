import React, { useState } from 'react';
import {
    Container,
    ContainerTop,
    ContainerMiddle,
    ContainerBottom,
    ContainerEmail
} from './styles';
import { TouchableOpacity } from "react-native";
import { Markdown, Button, Image, TextField } from "../../../../components";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const response = await auth().signInWithEmailAndPassword(name, password);
        console.log(response);

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




