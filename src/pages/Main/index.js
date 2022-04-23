import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description
} from "./styles";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Menu from "../../components/Menu";

const Main = () => {
  let offSet = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offSet += translationY;

      if (translationY >= 100) {
        opened = true;
      }
      else{
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offSet = opened ? 380 : 0;

        translateY.setOffset(offSet);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#777" />
              <Icon name="visibility-off" size={28} color="#777" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>BTC 192.610,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de BTC 0.05 recebida de Luiz Fernando
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
