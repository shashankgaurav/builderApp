import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { SplashScreenStyle } from "../../Styles/SplashScreenStyle/SplashScreenStyle";
import startMainApp from "../MainApp/mainApp";
import { loginAction } from "../../Actions/loginAction/loginAction";
import { OrangeButton } from "../../Components/UI_Buttons/OrangeButton";

class SplashScreen extends Component {

    constructor(props){
        super(props);
    }

    _handlePress = () => {
        startMainApp();
    }

    render() {
        return(
            <View style = { SplashScreenStyle.container }>
                <View style = {SplashScreenStyle.textContainer}>
                    <Text style = {SplashScreenStyle.textWelcome}>Welcome</Text>
                    <Text style = {SplashScreenStyle.textBuilder}>Builder<Text style = {SplashScreenStyle.textEdge}>Edge</Text></Text>
                </View>
                <View style = {SplashScreenStyle.buttonContainer}>
                    <OrangeButton onPress = {this._handlePress}>Continue</OrangeButton>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen);