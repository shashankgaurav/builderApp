import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Header, Left, Button, Body, Title, Icon } from "native-base";
import CustomHeader from "../../Components/UI_Header/Header";

class DefectDetails extends Component{
    constructor(props){
        super(props);
    }

    onNavigatorEvent = () => {
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    }

    render(){
        return(
            <ScrollView style = {Style.container}>
                <Header>
                <Left>
                    <Button transparent onPress = {this.onNavigatorEvent}>
                        <Icon name='md-arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
            </Header>
            <Button block light style = {Style.editButton}>
                <Icon name = "md-open" style = {{color: "#000", marginLeft: 0}}/>
                <Text style = {Style.editButtonText}>Edit</Text>
            </Button>

            <View style = {Style.defectDetailsContainer}>
                <View style = {Style.defectDetailsHeader}>
                    <View style = {Style.headerTitle}>
                        <Text style = {Style.titleText}>Water Leak in Kitchen</Text>
                    </View>
                    <View style = {Style.headerStatus}>
                        <Text style = {Style.headerText}>Late</Text>
                    </View>
                </View>
                <View style = {Style.defectDetailsBody}>
                    <Text style = {[Style.defectDetailsBodyText]}>Found on stage: Plumbing</Text>
                    <Text style = {Style.defectDetailsBodyText}>Zone: Kitchen</Text>
                    <Text style = {Style.defectDetailsBodyText}>Found on stage: Plumbing</Text>
                    <Text style = {Style.defectDetailsBodyText}>Made By: John</Text>
                    <Text style = {[Style.defectDetailsBodyText, {marginTop: 15}]}>Inspection Form Item: Inspector Form</Text>
                    <Text style = {[Style.defectDetailsBodyText, {marginBottom: 15}]}>Inspection line Item: Inspector Form</Text>
                    <Text style = {[Style.defectDetailsBodyText, {marginBottom: 15}]}>Reported By: John</Text>
                    <Text style = {[Style.defectDetailsBodyText, {marginBottom: 15}]}>Responsible to Check Fix: John</Text>
                    <Text style = {Style.defectDetailsBodyText}>Fix on Stages: Finishes</Text>
                    <Text style = {Style.defectDetailsBodyText}>To be Fix By Sub: Gordon Young</Text>
                    <Text style = {Style.defectDetailsBodyText}>Due Date: 02/03/2018</Text>
                    <Text style = {Style.defectDetailsBodyText}>Attached Files: </Text>

                </View>
                <View style = {Style.defectDetailsFooter}>
                    <View style = {Style.doneButton}>
                        <Button block><Text>Done</Text></Button>
                    </View>
                    <View style = {Style.rejectButton}>
                    <Button block><Text>Reject</Text></Button>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

export default DefectDetails;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fad390"
    },

    editButton:{
        flex: 1,
        width: "30%",
        elevation: 10,
        marginHorizontal: "5%",
        marginVertical: "5%"
    },

    editButtonText: {
        fontSize: 16,
        color: "#000"
    },

    defectDetailsHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        borderLeftWidth: 5,
        borderLeftColor: "red",
        borderTopLeftRadius: 5

    },

    defectDetailsContainer: {
        flex: 1,
        width: "95%",
        alignSelf: 'center',
        backgroundColor: "#fff",
        elevation: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    titleText: {
        fontSize: 16,
        color: "#000",
        fontWeight: 'bold',
        paddingHorizontal: 7,
        paddingVertical: 10,
        alignSelf: 'flex-start',
    },

    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000",
        alignSelf: 'flex-end',
        padding: 7,


    },

    headerTitle: {
        flex: 2,

    },

    headerStatus: {
        flex: 1
    },

    defectDetailsBody: {
        flex: 1
    }, 
    defectDetailsBodyText: {
        fontSize: 16,
        color: "#000",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    defectDetailsFooter: {
        flex: 1,
        width: "95%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    doneButton: {
        flex: 2
    },

    rejectButton: {
        flex: 1
    }
})