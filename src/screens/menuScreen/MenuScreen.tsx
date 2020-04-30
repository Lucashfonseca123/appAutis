import React from "react";
import { Markdown, Card } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { headerComposer, Header } from '../../navigation/NavigationMixins';
import { Container, BottomContainer } from "./styles";


const MenuScreen = () => {
    const navigation = useNavigation();

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.navigate('WelcomeScreen')),
        backgroundColor: '#FFEF60',
        rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
    }));

    return (
        <Container>
            <Card paddingTop={180}
                paddingBottom={180}
                backgroundColor="green"
                onPress={() => navigation.navigate('PlayerScreen')}>
                <Markdown title="Figuras geométricas" textAlign="center" />
            </Card>
            <BottomContainer>
                <Markdown title="Deslize para outros temas" fontSize={20} />
            </BottomContainer>
        </Container>
    );
}

export default MenuScreen;