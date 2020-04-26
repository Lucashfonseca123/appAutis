import styled, { css } from 'styled-components/native';

interface IButton {
  widthSize?: number | string;
  heightSize?: number | string;
}

const Container = styled.View`
  background-color: #D5C53A;
  border-width: 0.2px;
  /* justify-content: center;
  align-items: center; */
  ${(props: IButton) => css`
  width: ${props.widthSize ? props.widthSize : '100%'};
  padding-bottom: ${props.heightSize ? props.heightSize : '25%'};
  padding-top: ${props.heightSize ? props.heightSize : '25%'};
  `
  }
  border-radius: 20px;
  elevation: 3;
`;

export { Container };