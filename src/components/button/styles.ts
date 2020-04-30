import styled, { css } from 'styled-components/native';

interface IButton {
  widthSize?: number | string;
  heightSize?: number | string;
}

const Container = styled.View`
  background-color: #E1CB00;
  border-width: 0.2px;
  align-items: center;
  ${(props: IButton) => css`
  width: ${props.widthSize ? props.widthSize : 100}px;
  `
  }
  border-radius: 20px;
  elevation: 3;
  overflow: hidden;
`;

export { Container };