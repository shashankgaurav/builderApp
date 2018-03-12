import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const OrangeButton = props => (
    <TouchableOpacity style = {OrangeButtonStyle.buttonTouchable}>
        <Text style = {OrangeButtonStyle.buttonText} {...props}>{props.children}</Text>
    </TouchableOpacity>
);

const OrangeButtonStyle = StyleSheet.create({

    buttonTouchable: {
        width: 350,
        height: "20%",
        backgroundColor: "#F16824",
        justifyContent: "center",
        alignItems: 'center',
    },

    buttonText: {
        color: "#fff",
        fontSize: 28,
        fontFamily: 'Georgia',
    }
}
)