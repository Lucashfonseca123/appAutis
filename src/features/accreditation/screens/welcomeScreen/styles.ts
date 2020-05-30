import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffef60;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerTop = styled.View`
  /* justify-content: flex-start; */
`;

const ContainerMiddle = styled.View`
  align-items: center;
  width: 100%;
`;

const ContainerBottom = styled.View`
  /* justify-content: flex-end; */
`;

const ContainerEmail = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const DivButtonModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export {
  Container,
  ContainerBottom,
  ContainerTop,
  ContainerMiddle,
  ContainerEmail,
  DivButtonModal,
};
