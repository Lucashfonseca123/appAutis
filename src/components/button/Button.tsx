import React from 'react';
import { TouchableOpacity, View, ShadowPropTypesIOS } from 'react-native';
import { Markdown } from "../";
import { Container } from './styles'

interface IButton {
    text: string;
    onPress: Function;
    widthSize?: number | string;
    heightSize?: number | string;
    fontSize?: number;
    backgroundColor?: string;
    paddingTopButton?: number;
}

const Button = (props: IButton) => {
    return (
        <Container widthSize={props.widthSize} heightSize={props.heightSize}
            paddingTopButton={props.paddingTopButton}>
            <TouchableOpacity onPress={props.onPress ? props.onPress : null} style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Markdown title={props.text} fontSize={props.fontSize} />
            </TouchableOpacity>
        </Container>
    );
}

export default Button;