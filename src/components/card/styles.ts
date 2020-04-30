import styled, { css } from 'styled-components/native';

interface ICardProps {
  paddingTop?: number;
  paddingBottom?: number;
  backgroundColor?: string;
  width?: number;
}

const Card = styled.View`
  ${(props: ICardProps) => css`
    background-color: ${props.backgroundColor ? props.backgroundColor : 'white'};
    justify-content: center;
    align-items: center;
    width: ${props.width ? props.width : 100}%;
    padding-bottom:24px;
    border-radius: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: ${props.paddingTop ? props.paddingTop : 16}px;
    padding-bottom: ${props.paddingBottom ? props.paddingBottom : 16}px;
    elevation: 2;
    border-width: 0.2px;
  `}
`;

export { Card };