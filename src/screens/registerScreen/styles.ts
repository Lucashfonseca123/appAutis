import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #FFEF60;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

const ContainerTop = styled.View`
  margin-top: 16px;  
`;

const ContainerBottom = styled.View`
  margin-top: 26px;
  width: 100%;
  justify-content: center;
  align-items: center;  
`;

const ContainerImage = styled.View`
  position: absolute;
  bottom: 134px;
  left: 10px;
`;

const ContainerPopUp = styled.View`
  position: absolute;
  top: 80px;
  left: 45px;
  width: 53%;
`;


export { Container, ContainerTop, ContainerBottom, ContainerImage, ContainerPopUp }

