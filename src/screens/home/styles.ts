import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: lightsteelblue;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerButton = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

const ContainerTop = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const ContainerBottom = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export {Container, ContainerButton, ContainerBottom, ContainerTop};
