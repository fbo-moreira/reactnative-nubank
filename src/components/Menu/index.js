import React from "react";
import QRCode from "react-native-qrcode-svg";
import Icon from 'react-native-vector-icons/MaterialIcons';


import { Container, Code, Nav, NavItem, NavText,SignOutButton, SignOutButtonText } from "./styles";

const Menu = ({translateY}) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      }),
    }}>
      <Code>
        <QRCode
          value="https://github.com/fbo-moreira"
          size={80}
          color="#8B10AE"
          backgroundColor="#FFF"
        />
      </Code>
      <Nav>
          <NavItem>
              <Icon name="help-outline" size={20} color="#FFF"></Icon>
              <NavText>Me Ajuda</NavText>
          </NavItem>
          <NavItem>
              <Icon name="person-outline" size={20} color="#FFF"></Icon>
              <NavText>Perfil</NavText>
          </NavItem>
          <NavItem>
              <Icon name="credit-card" size={20} color="#FFF"></Icon>
              <NavText>Configurar cartão</NavText>
          </NavItem>
          <NavItem>
              <Icon name="smartphone" size={20} color="#FFF"></Icon>
              <NavText>Configurações</NavText>
          </NavItem>
      </Nav>

      <SignOutButton onPress={() =>{}}>
          <SignOutButtonText>Sair</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
