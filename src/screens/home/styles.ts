import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;

  justify-content: flex-start;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerBottom = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;

const ContainerTop = styled.View`
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ContainerButton = styled.View`
  background-color: white
  width: 70%;
  height: 50px;
  border-radius: 25px;
`;

const Titulo = styled.Text`
  font-family: 'Doctor_Soos_Bold_2.1';
  font-size: 40px;
  color: #fff;
`;

const TituloBotao = styled.Text`
  font-family: 'doctorbold';
  font-size: 25px;
  color: #f0c01a;
`;

export { Container, ContainerButton, ContainerBottom, ContainerTop, Titulo, TituloBotao };
