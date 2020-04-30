import React from "react";
import { TouchableOpacity, ShadowPropTypesIOS } from "react-native";
import { Card } from "./styles";

interface ICard {
    children?: JSX.Element;
    paddingTop?: number;
    paddingBottom?: number;
    backgroundColor?: string;
    width?: number;
    onPress?: Function;
}

const CardText = ({ children, paddingTop,
    paddingBottom, backgroundColor,
    onPress, width }: ICard) => {
    return (
        <>
            {
                onPress ?
                    <TouchableOpacity onPress={onPress ? onPress : null} >
                        <Card paddingTop={paddingTop}
                            paddingBottom={paddingBottom}
                            backgroundColor={backgroundColor}>
                            {children}
                        </Card>
                    </TouchableOpacity >
                    :
                    <Card paddingTop={paddingTop}
                        paddingBottom={paddingBottom}
                        backgroundColor={backgroundColor}
                        width={width}>
                        {children}
                    </Card>
            }
        </>
    )
}

export default CardText;