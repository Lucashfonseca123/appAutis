// Imports: Dependencies
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../store/RootReducer";

import { decreaseCounter, increaseCounter } from "../../redux/action/counterActions";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const counter = useSelector(
    (appState: AppState) => appState.authReducer.countReducer.counter,
  );

  const setIncrement = () => {
    dispatch(increaseCounter());
  }

  const setNotIncrement = () => {
    dispatch(decreaseCounter());
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={setIncrement} style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Incrementa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setNotIncrement} style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Decrementa</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Total: {counter}</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen;



// import React from 'react';
// // import { Image } from 'react-native';
// import {
//   Container,
//   ContainerTop,
//   ContainerMiddle,
//   ContainerBottom
// } from './styles';
// import { Markdown, Button, Image } from "../../components";
// import { useNavigation } from '@react-navigation/native';

// const WelcomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <Container>
//       <ContainerTop>
//         <Markdown title="hey max" fontSize={64} />
//       </ContainerTop>
//       <ContainerMiddle>
//         <Button text="INICIAR" onPress={() => navigation.navigate('RegisterScreen')}
//           backgroundColor="white"
//           fontSize={36}
//           heightSize={16}
//           widthSize={300} />
//       </ContainerMiddle>
//       <ContainerBottom>
//         <Image type="Feliz"
//         />
//       </ContainerBottom>
//     </Container>
//   );
// };

// export default WelcomeScreen;




