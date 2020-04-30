import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #FFEF60;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
`;

const DivImage = styled.View`
  position: absolute;
  top: -30px;
  left: 235px;
  transform: rotate(310deg);
`;

const DivTop = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
`;

const DivMiddle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DivButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export { Container, DivButton, DivMiddle, DivTop, DivImage };
