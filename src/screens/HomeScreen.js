import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'native-base';
import { Constants } from 'expo';

export default class Home extends Component { 
    render() {
        return(
            <View style={style.container}>
                <View style={style.statusBar}>
                    <Header style={{justifyContent: "center", alignItems: "center", backgroundColor: "#0fbcf9"}}>
                        <Text style={{fontSize: 23, fontWeight: "bold", color: "#FFF"}}>Gestor Financeiro</Text>
                    </Header>                
                </View>                
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#d2dae2"
    },
    statusBar: {
        backgroundColor: "#0fbcf9",
        height: Constants.statusBarHeight,
        paddingTop: Expo.Constants.statusBarHeight
    }
});