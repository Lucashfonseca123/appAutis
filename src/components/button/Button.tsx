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
    paddingLeft?: number;
    paddingRight?: number;
}

const Button = (props: IButton) => {
    return (
        <Container widthSize={props.widthSize}>
            <TouchableOpacity
                onPress={props.onPress ? props.onPress : null}
                style={{
                    alignItems: 'center',
                    width: props.widthSize,
                    paddingTop: props.heightSize,
                    paddingBottom: props.heightSize,
                }}>
                <Markdown title={props.text} fontSize={props.fontSize} />
            </TouchableOpacity>
        </Container >
    );
}

export default Button;