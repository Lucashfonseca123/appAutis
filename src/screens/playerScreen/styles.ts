import styled from 'styled-components/native';

const Container = styled.View`
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
`;

const DivTop = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const DivButton = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export { Container, DivButton, DivTop };
