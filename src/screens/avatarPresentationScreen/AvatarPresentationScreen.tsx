import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { Image, Button } from "../../components";
import { Container } from "./styles";

export default function App() {
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
      <Animated.View
        style={[
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        <Image type="Bebe" width={140} height={160} />
      </Animated.View>
      <Button text="Ok, vamos lá!" onPress={() => fadeOut()}
        widthSize={70}
        heightSize={3} />
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});