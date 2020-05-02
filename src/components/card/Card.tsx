import React, { ReactNode } from "react";
import { TouchableOpacity, ShadowPropTypesIOS } from "react-native";
import { Card } from "./styles";
import { Image } from "../";
import { ImageBackground } from "react-native";

interface ICard {
    children?: ReactNode;
    paddingTop?: number;
    paddingBottom?: number;
    backgroundColor?: string;
    width?: number;
    onPress?: Function;
    borderColor?: string;
    borderWidth?: number;
    noPaddingHorizontal?: boolean;
}

const CardText = ({ children, paddingTop,
    paddingBottom, backgroundColor,
    onPress, width,
    borderColor, borderWidth,
    noPaddingHorizontal }: ICard) => {
    return (
        <>
            {
                onPress ?
                    <>
                        <ImageBackground source={require('../../assets/icons/rectangle.png')}
                            style={{
                                // backgroundColor: 'black',
                                // flex: 1,
                                width: "100%", height: 420,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 30,
                                overflow: "hidden"
                            }}>
                            <TouchableOpacity onPress={onPress ? onPress : null} style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} >
                                {children}
                            </TouchableOpacity >
                        </ImageBackground>
                    </>
                    :
                    <Card paddingTop={paddingTop}
                        paddingBottom={paddingBottom}
                        backgroundColor={backgroundColor}
                        width={width}
                        onPress={true}
                        borderColor={borderColor}
                        borderWidth={borderWidth}
                    >
                        {children}
                    </Card>
            }
        </>
    )
}

export default CardText;