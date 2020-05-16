import styled, { css } from 'styled-components/native';

interface IButton {
  widthSize?: number | string;
  heightSize?: number | string;
  color?: 'disabled' | 'enable';
}

const Container = styled.View`
  ${(props: IButton) => css`
  background-color: ${props.color === 'disabled' ? '#BCB46D' : '#E1CB00'}
`}
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

const PaddingButton = styled.View`
  padding-right: 8px;
`;

export { Container, PaddingButton };