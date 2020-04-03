import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

const Card = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom:24px;
  border-radius: 32px;
  elevation: 2;
`;

const ContainerButton = styled.View`
  background-color: yellow;
  margin-top: 8px;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  border-radius: 10px;
  elevation: 2;
`;

export { Container, Card, ContainerButton }

