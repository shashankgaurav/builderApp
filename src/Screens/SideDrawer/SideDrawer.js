import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
    render() {
        return (
            <View style = {[styles.container, {width: Dimensions.get("window").width * 0.6}]}>
                <Text>Side drawer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingTop: "10%",
    }
})

export default SideDrawer;