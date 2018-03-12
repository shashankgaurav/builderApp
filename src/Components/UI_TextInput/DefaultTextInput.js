import React from 'react';
import { TextInput, StyleSheet } from "react-native"

const defaultTextInput = (props) => (
    <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#666"  
                {...props}
    />
);

export default defaultTextInput;

const styles = StyleSheet.create({
    input: {
        width: "100%",
        marginVertical: "2%",
        borderColor: "#555",
        borderWidth: 2,      
    },
})