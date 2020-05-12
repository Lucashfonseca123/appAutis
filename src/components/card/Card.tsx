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
    source?: NodeRequire;
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
                                // backgroundColor: 'black',
                                // flex: 1,
                                width: "100%", height: 420,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 30,
                                overflow: "hidden",
                                elevation: 4,
                            }}>
                            <TouchableOpacity onPress={onPress ? onPress : null} style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 8,
                                paddingRight: 8
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