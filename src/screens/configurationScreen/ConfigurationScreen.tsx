import React from "react";
import { Markdown, Image, Card } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { headerComposer, Header } from '../../navigation/NavigationMixins';
import { Container, DivCard, Padding } from "./styles";
import { TouchableOpacity } from "react-native";

const ConfigurationScreen = () => {
    const navigation = useNavigation();

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.goBack()),
        backgroundColor: '#FFEF60',
    }));

    return (
        <Container>
            <Image type="Inteiro" width={100} height={420} />
            <DivCard>
                <Card width={100} backgroundColor="#E1CB00">
                    <Markdown title="Progresso" fontSize={20} />

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
                    <TouchableOpacity onPress={() => null}>
                        <Image type="Exit" width={40} height={40} />
                    </TouchableOpacity>
                </Card>
            </DivCard>
        </Container>
    );
}

export default ConfigurationScreen;