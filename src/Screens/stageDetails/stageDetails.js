import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Header, Content, Item, Input, Icon, Picker, Form, Button } from "native-base";
import CustomHeader from "../../Components/UI_Header/Header";
import CollapsableCard from "../../Components/UI_Cards/collapsableCard";
import { CalenderInput } from "../../Components/UI_CalenderInput/calenderInput";

class StageDetails extends Component {
    constructor(props){
        super(props);
    }

    state = {
        itemSelected: undefined
    }

    _handleBack = () => {
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    }

    onNavigatorEvent = event => {
        this.props.navigator.toggleDrawer({
            side: "left"
        })
        // if(event.type === "NavBarButtonPress"){
        //     if(event.id === "sideDrawer"){
        //         this.props.navigator.toggleDrawer({
        //             side: "left"
        //         })
        //     }
        // }
    }

    _selectItem = (value) => {
        this.setState({itemSelected: value})
    }

    render() {
        return(
            <ScrollView style = {Style.container}>
               <CustomHeader onNavigatorEvent = {this.onNavigatorEvent} />
               <View style = {Style.subcontractorDrop}>
                    <View style = {Style.dropdownTitle}>
                        <Text style = {Style.dropdownTitleText}>Subcontractor</Text>
                    </View>
                    <View style = {Style.dropDown}>
                    <Form>
                        <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        selectedValue={this.state.itemSelected}
                        onValueChange={this._selectItem}
                        >
                            <Item label="Subcontractor 1" value="key0" />
                            <Item label="Subcontractor 2" value="key1" />
                            <Item label="Subcontractor 3" value="key2" />
                            <Item label="Subcontractor 4" value="key3" />
                            <Item label="Subcontractor 5" value="key4" />
                        </Picker>
                    </Form>
                    </View>               
               </View>
               <View style = {Style.beforeStart}>
                    <CollapsableCard title = {"Before Start"}/>
               </View>
               <View style = {Style.calenderInput}>
                    <CalenderInput />
               </View>
               <View style = {Style.duringWork}>
                    <CollapsableCard title = {"During Work"}/>
               </View>
               <View style = {Style.beforeFinish}>
                    <CollapsableCard title = {"Before Finish"}/>
               </View>
               <View style = {Style.calenderInput}>
                    <CalenderInput />
               </View>
               <View style = {Style.updatePlan}>
                    <Button block style = {Style.reopenButton}><Text style = {Style.reopenButtonText}>Reopen</Text></Button>
                    <Button block style = {Style.reopenButton} onPress = {this._handleBack}><Text style = {Style.reopenButtonText}>Update</Text></Button>
               </View>

            </ScrollView>
        )
    }
}

export default StageDetails;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dbd9d9"
    },

    subcontractorDrop: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },

    dropdownTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    dropdownTitleText: {
        color: "#000",
        fontSize: 14,
        padding: 7,
        fontWeight: 'bold',
    },

    dropDown: {
        width: "95%",
        alignSelf: 'center',
    },

    dropdownMenu: {
        borderColor: "#000"
    },

    beforeStart: {
        flex: 1,
        elevation: 10,
        width: "95%",
        alignSelf: "center",
        marginVertical: 7
    },

    duringWork:{
        flex: 1,
        elevation: 10,
        width: "95%",
        alignSelf: "center",
        marginVertical: 7

    },

    beforeFinish: {
        flex: 1,
        elevation: 10,
        width: "95%",
        alignSelf: "center",
        marginVertical: 7

    },

    calenderInput: {
        flex: 1,
        width: "95%",
        alignSelf: 'center',
    },

    updatePlan: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    reopenButton: {
        width: "58%",
        alignSelf: 'center',
        marginVertical: 10
    }


})