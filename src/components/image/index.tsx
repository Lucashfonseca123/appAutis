import React from 'react';
import { Image } from 'react-native';

interface IImage {
    type: 'Confuso'
    | 'Feliz'
    | 'FelizOrelhaBaixoDente'
    | 'FelizOrelhaDente'
    | 'Inteiro'
    | 'TristeChoro'
    | 'Adolescente'
    | 'Adulto'
    | 'Adulto2'
    | 'Adulto3'
    | 'Bebe'
    | 'Criança'
    | 'Nene'
    | 'Velho'
    | 'ArrowRight'
    | 'Question'
    | 'Checkbox'
    | 'CheckboxConfirmed'
    | 'Exit'
    | 'Close'
    | 'Menu'
    | 'Quadrado'
    | 'Circulo'
    | 'Octogono'
    | 'Pentagono'
    | 'Retangulo'
    | 'Trapezio'
    | 'Triangulo'
    | 'FundoRetangulo'
    | 'Gmail';
    width?: number;
    height?: number;
}

const MaxImage = (props: IImage) => {
    const getUrl = () => {

        switch (props.type) {
            case "Confuso": {
                return <Image
                    source={require('../../assets/max/Confuso.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Feliz": {
                return <Image
                    source={require('../../assets/max/Feliz.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "FelizOrelhaBaixoDente": {
                return <Image
                    source={require('../../assets/max/FelizOrelhaBaixoDente.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "FelizOrelhaDente": {
                return <Image
                    source={require('../../assets/max/FelizOrelhaDente.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Inteiro": {
                return <Image
                    source={require('../../assets/max/Inteiro.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "TristeChoro": {
                return <Image
                    source={require('../../assets/max/TristeChoro.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Adolescente": {
                return <Image
                    source={require('../../assets/avatar/adolescente.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Adulto": {
                return <Image
                    source={require('../../assets/avatar/adulto.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Adulto2": {
                return <Image
                    source={require('../../assets/avatar/adulto2.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Adulto3": {
                return <Image
                    source={require('../../assets/avatar/adulto3.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Bebe": {
                return <Image
                    source={require('../../assets/avatar/bebe.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Criança": {
                return <Image
                    source={require('../../assets/avatar/criança.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Nene": {
                return <Image
                    source={require('../../assets/avatar/nene.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Velho": {
                return <Image
                    source={require('../../assets/avatar/velho.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "ArrowRight": {
                return <Image
                    source={require('../../assets/icons/arrowRight.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Question": {
                return <Image
                    source={require('../../assets/icons/question.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Checkbox": {
                return <Image
                    source={require('../../assets/icons/checkbox.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "CheckboxConfirmed": {
                return <Image
                    source={require('../../assets/icons/checkbox-confirmed.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Exit": {
                return <Image
                    source={require('../../assets/icons/exit.png')}
                    style={{ width: props.width ? props.width : 247, height: props.height ? props.height : 200 }}
                />
            }
            case "Close": {
                return <Image
                    source={require('../../assets/icons/close.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Menu": {
                return <Image
                    source={require('../../assets/icons/menu.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Quadrado": {
                return <Image
                    source={require('../../assets/pictures/quadrado.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Circulo": {
                return <Image
                    source={require('../../assets/pictures/circulo.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Retangulo": {
                return <Image
                    source={require('../../assets/pictures/retangulo.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Triangulo": {
                return <Image
                    source={require('../../assets/pictures/triangulo.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "FundoRetangulo": {
                return <Image
                    source={require('../../assets/icons/rectangle.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
            case "Gmail": {
                return <Image
                    source={require('../../assets/icons/gmail.png')}
                    style={{ width: props.width ? props.width : 147, height: props.height ? props.height : 100 }}
                />
            }
        }
    }
    return (
        <>
            {getUrl()}
        </>
    );
}

export default React.memo(MaxImage);