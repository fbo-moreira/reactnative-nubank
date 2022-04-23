import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Routes from './routes';
const statusBarStyle = 'light-content';

const App =() => (
    <>
        <StatusBar barStyle={statusBarStyle} hidden={false} />
        <Routes />
    </>
);

export default App;
