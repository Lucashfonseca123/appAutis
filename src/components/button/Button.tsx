import React from 'react';
import { TouchableOpacity, View, ShadowPropTypesIOS } from 'react-native';
import { Markdown } from "../";
import { Container } from './styles'

interface IButton {
    text: string;
    onPress: Function;
    size?: number;
    fontSize?: number;
    backgroundColor?: string;
}

const Button = (props: IButton) => {
    return (
        <Container>
            <TouchableOpacity onPress={props.onPress ? props.onPress() : null} style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Markdown title={props.text} fontSize={props.fontSize} />
            </TouchableOpacity>
        </Container>
    );
}

export default Button;