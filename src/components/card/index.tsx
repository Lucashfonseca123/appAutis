import React, { ReactNode } from "react";
import { TouchableOpacity, ShadowPropTypesIOS } from "react-native";
import { Card, ContainerCard } from "./styles";
import { ImageBackground } from "react-native";
import { Image } from "../";



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
    source?: NodeRequire | string;
}

interface NodeRequire {
    (id: string): any;
}

let Require: NodeRequire;

const CardText = ({ children, paddingTop,
    paddingBottom, backgroundColor,
    onPress, width,
    borderColor, borderWidth,
    noPaddingHorizontal, source }: ICard) => {
    return (
        <>
            {
                onPress ?
                    <>
                        <ImageBackground source={{ uri: source }}
                            style={{
                                width: "100%", height: 420,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 30,
                                overflow: "hidden",
                                elevation: 4,
                            }}>
                            {/* <ContainerCard> */}
                            <TouchableOpacity onPress={onPress ? onPress : null} style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }} >
                                {children}
                            </TouchableOpacity >
                            {/* </ContainerCard> */}
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

export default React.memo(CardText);