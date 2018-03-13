import React from 'react';
import {  View, StyleSheet, Text  } from 'react-native';
import {  Item, Input, Icon, Button  } from "native-base";

export const CalenderInput = (props) => (
    <View style = {Style.timetable}>
        <View style = {Style.timetableHeader}>
            <Text style = {Style.timetableHeaderText}>Schedule Time Table</Text>
        </View>
        <View>
            <Item regular disabled style = {Style.timetableBody}>
                <Input value='Enter Date' style = {{backgroundColor: "#000"}}/>
                <Icon name = "ios-cloud" />
            </Item>
        </View>
        <View style = {Style.timetableButtonContainer}>
            <Button block style = {Style.timetableButton}><Text style = {Style.timetableButtonText}>Start</Text></Button>
        </View>
    </View>
)

const Style = StyleSheet.create({
    timetable: {
        flex: 1
    },

    timetableHeader:{
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 5,
    },

    timetableHeaderText:{
        fontSize: 16,
        color: "#000",
    },

    timetableBody: {
        borderColor: "#000",
    },

    timetableButtonContainer: {
        flex: 1
    },

    timetableButton: {
        backgroundColor: "green",
        marginVertical: 7,
        marginLeft: 3,
        width: "60%",
        alignSelf: 'center',
    },

    timetableButtonText: {
        color: "#fff"
    }
})
