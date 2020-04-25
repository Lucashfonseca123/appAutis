import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFEF60;
  flex-direction: column;
  justify-content:space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerTop = styled.View`
  justify-content: flex-start;
`;

const ContainerMiddle = styled.View`
  width: 100%;
`;

const ContainerBottom = styled.View`
  background-color: black;
  flex: 1;
`;



export { Container, ContainerBottom, ContainerTop, ContainerMiddle };
