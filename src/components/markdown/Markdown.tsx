import React from 'react';
import { Text, View, ShadowPropTypesIOS } from "react-native";
import { MarkdownT } from './styles';

interface IMarkdown {
    title: string;
    fontSize?: number;
    fontColor?: string;
    fontFamily?: string;
}

const Markdown = ({ title, fontSize, fontColor, fontFamily }: IMarkdown) => {
    return (
        <View>
            <MarkdownT
                fontSize={fontSize}
                fontColor={fontColor}
                fontFamily={fontFamily}>
                {title}
            </MarkdownT>
        </View>
    );
}

export default Markdown;