import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Markdown, Image } from "../";
import { Container, PaddingButton } from './styles'

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
                    justifyContent: 'center',
                    width: props.widthSize,
                    paddingTop: props.heightSize,
                    paddingBottom: props.heightSize,
                    flexDirection: 'row'
                }}>
                {props.text === 'Menu' ?
                    <>
                        <PaddingButton>
                            <Image type="Menu" width={20} height={20} />
                        </PaddingButton>
                    </>
                    : null}
                <Markdown title={props.text} fontSize={props.fontSize} />
            </TouchableOpacity>
        </Container >
    );
}

export default Button;