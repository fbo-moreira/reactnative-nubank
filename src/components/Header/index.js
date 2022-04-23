import React from "react";
import { View } from "react-native";
import { Container, Logo, Title, Top } from "./styles";

// import { Container } from './styles';
import logo from "../../assets/Nubank_Logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Fábio</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
