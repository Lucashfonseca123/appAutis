import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { Image, Button, PopUp } from "../../components";
import { Container, ContainerTop, ContainerMiddle, ContainerBottom } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  useEffect(() => {
    fadeIn();
  }, [])
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start();
  };

  return (
    <Container>
      <PopUp title="Esse é o Pedro!  Quanto mais perguntas acertar, mais rápido ele irá crescer!"
        posLeft={80} posTop={45} fontSize={18} width={81} />
      <ContainerTop>
        <Image type="FelizOrelhaBaixoDente" width={140} height={160} />
      </ContainerTop>
      <ContainerMiddle>
        <Animated.View
          style={[
            {
              opacity: fadeAnim // Bind opacity to animated value
            }
          ]}
        >
          <Image type="Bebe" width={140} height={160} />
        </Animated.View>
      </ContainerMiddle>
      <ContainerBottom>
        <Button text="Ok, vamos lá!" onPress={() => navigation.navigate('MenuScreen')}
          widthSize={200}
          heightSize={10}
          fontSize={20}
        />
      </ContainerBottom>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});