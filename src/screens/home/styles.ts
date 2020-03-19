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

const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  /* flex-direction: row; */
  /* overflow: hidden; */
  /* border-color: #ddd;
  border-width: 1px; */
`;

const ContainerTop = styled.View`
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ContainerBottom = styled.View`
  /* flex: 1; */
  width: 60%;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  border-color: #ddd;
  border-width: 1px;
`;

const Titulo = styled.Text`
  font-family: 'Doctor_Soos_Bold_2.1';
  font-size: 40px;
`;

const TituloBotao = styled.Text`
  font-family: 'doctorbold';
  font-size: 25px;
`;

export { Container, ContainerButton, ContainerBottom, ContainerTop, Titulo, TituloBotao };
