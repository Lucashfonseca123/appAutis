import styled, { css } from "styled-components/native";

interface IMarkdown {
    fontSize: number;
    fontColor: string;
    fontFamily: string;
}

const MarkdownT = styled.Text`
    ${(props: IMarkdown) => css`
        font-size: ${props.fontSize ? props.fontSize : 26}px;
        color: ${props.fontColor ? props.fontColor : 'white'};
        font-family: ${props.fontFamily ? props.fontFamily : "showcard-gothic"};
        text-shadow: 1px 1px 1px black; 
    `}
`;

export { MarkdownT };