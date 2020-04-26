import React from 'react';
import { Image } from 'react-native';

interface IImage {
    type: 'Confuso' | 'Feliz' | 'FelizOrelhaBaixoDente' | 'FelizOrelhaDente' | 'Inteiro' | 'TristeChoro';
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
        }
    }
    return (
        <>
            {getUrl()}
        </>
    );
}

export default MaxImage;