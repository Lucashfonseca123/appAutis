import React, { useState, useEffect } from "react";
import { Markdown, Image, Card, Modal, Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { headerComposer, Header } from '../../navigation/NavigationMixins';
import { Container, DivCard, Padding, DivButtonModal } from "./styles";
import { TouchableOpacity, BackHandler } from "react-native";
import * as Progress from "react-native-progress";

const ConfigurationScreen = () => {
    const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.goBack()),
        backgroundColor: '#FFEF60',
    }));

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
            <Image type="Inteiro" width={110} height={480} />
            <DivCard>
                <Card width={100} backgroundColor="#E1CB00"
                    borderWidth={5} borderColor="white">
                    <Markdown title="Progresso" fontSize={16} />
                    <Padding />
                    <Progress.Bar progress={0.7} width={100} height={20}
                        color="grey" borderColor="black" borderWidth={1} />

                    <Padding />
                    <Markdown title="Status" fontSize={20} />
                    <Markdown title="Adolescente" fontSize={20} fontColor="#FFEF60" />

                    <Padding />
                    <Image type="Adolescente" width={40} height={120} />
                    <Padding />

                    <Markdown title="Som" fontSize={20} fontColor="#FFEF60" />
                    <Padding />
                    <TouchableOpacity onPress={() => null}>
                        <Image type="Checkbox" width={40} height={40} />
                    </TouchableOpacity>
                    <Padding />
                    <Markdown title="Sair" fontSize={20} fontColor="#FFEF60" />
                    <Padding />
                    <TouchableOpacity onPress={() => showModal()}>
                        <Image type="Exit" width={40} height={40} />
                    </TouchableOpacity>
                </Card>
            </DivCard>
            <Modal isVisible={visibleModal} closeModal={closeModal} typeMax="TristeChoro">
                <Markdown title="Deseja sair?" fontColor="#FFEF60" />
                <DivButtonModal>
                    <Button text="Não" onPress={() => closeModal()} widthSize={100} heightSize={10} fontSize={20} />
                    <Button text="Sim" onPress={() => logout()} widthSize={100} heightSize={10} fontSize={20} />
                </DivButtonModal>
            </Modal>
        </Container >
    );
}

export default ConfigurationScreen;