import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { Button, Icon, Header, Left, Right, Body, Title } from "native-base";
import CustomHeader from "../../Components/UI_Header/Header";

class Stages extends Component {

    constructor(props){
        super(props);
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

    _handleDetails = () => {
        this.props.navigator.push({
            screen: 'builder.StageDetails', // unique ID registered with Navigation.registerScreen
            animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
            navigatorStyle: {navBarHidden: true,}, // override the navigator style for the pushed screen (optional)
          });
    }

    _handleDefectClick = () => {
        this.props.navigator.push({
            screen: 'builder.DefectDetails', // unique ID registered with Navigation.registerScreen
            animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
            navigatorStyle: {navBarHidden: true,}, // override the navigator style for the pushed screen (optional)
          });
    }


    render(){
        return (
            <View style = {{flex: 1}}>
            <CustomHeader onNavigatorEvent = {this.onNavigatorEvent} />
            <ScrollView style = {Styles.container}>
                <View style = {Styles.cardContainer}>
                    <View style = {Styles.cardHeader}>
                        <View style = {Styles.defectStatusColor}><Text></Text></View>
                        <View style = {Styles.defectName}><Text style = {Styles.defectNameText}>Lorem Ipsum</Text></View>
                        <View style = {Styles.defectStatus}><Text style = {Styles.defectStatusText}>Late Start</Text></View>
                    </View>
                    <View style = {Styles.start}>
                        <View style = {Styles.dateContainer}>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>Start: </Text>2/3/2018</Text>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>End: </Text>8/3/2018</Text>
                        </View>
                        <View style = {[Styles.buttonContainer, {transform:[{rotate: '90 deg'}]}]}>
                            <Icon name = "md-more" />
                        </View>
                    </View>
                    <View style = {Styles.subContract}>
                        <View style = {Styles.subContractTitle}><Text style = {Styles.subContractTitleText}>Subcontractor:</Text></View>
                        <View style = {Styles.subContractText}><Text style = {Styles.subContractNameText}>Subcontractor name</Text></View>
                    </View>
                    <View style = {Styles.defect}>
                        <TouchableOpacity style = {Styles.options} onPress = {this._handleDefectClick}><Text style = {Styles.optionsText}>Defects</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text adjustsFontSizeToFit style = {Styles.optionsText}>Inspections</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Issues</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Files</Text></TouchableOpacity>
                    </View>
                    <View style = {Styles.button}>
                        <Button block style = {Styles.openButton}><Text style = {Styles.openButtonText}>Reopen</Text></Button>
                        <Button block disabled style = {Styles.disabledButton}><Text>Finish</Text></Button>
                        <Button block style = {Styles.detailsButton} onPress = {this._handleDetails}><Text>Details</Text></Button>
                    </View>
                </View>

                <View style = {Styles.cardContainer}>
                    <View style = {Styles.cardHeader}>
                        <View style = {Styles.defectStatusColor}><Text></Text></View>
                        <View style = {Styles.defectName}><Text style = {Styles.defectNameText}>Lorem Ipsum</Text></View>
                        <View style = {Styles.defectStatus}><Text style = {Styles.defectStatusText}>Late Start</Text></View>
                    </View>
                    <View style = {Styles.start}>
                        <View style = {Styles.dateContainer}>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>Start: </Text>2/3/2018</Text>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>End: </Text>8/3/2018</Text>
                        </View>
                        <View style = {[Styles.buttonContainer, {transform:[{rotate: '90 deg'}]}]}>
                            <Icon name = "md-more" />
                        </View>
                    </View>
                    <View style = {Styles.subContract}>
                        <View style = {Styles.subContractTitle}><Text style = {Styles.subContractTitleText}>Subcontractor:</Text></View>
                        <View style = {Styles.subContractText}><Text style = {Styles.subContractNameText}>Subcontractor name</Text></View>
                    </View>
                    <View style = {Styles.defect}>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Defects</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text adjustsFontSizeToFit style = {Styles.optionsText}>Inspections</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Issues</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Files</Text></TouchableOpacity>
                    </View>
                    <View style = {Styles.button}>
                        <Button block style = {Styles.openButton}><Text style = {Styles.openButtonText}>Reopen</Text></Button>
                        <Button block disabled style = {Styles.disabledButton}><Text>Finish</Text></Button>
                        <Button block style = {Styles.detailsButton}><Text>Details</Text></Button>
                    </View>
                </View>

                <View style = {Styles.cardContainer}>
                    <View style = {Styles.cardHeader}>
                        <View style = {Styles.defectStatusColor}><Text></Text></View>
                        <View style = {Styles.defectName}><Text style = {Styles.defectNameText}>Lorem Ipsum</Text></View>
                        <View style = {Styles.defectStatus}><Text style = {Styles.defectStatusText}>Late Start</Text></View>
                    </View>
                    <View style = {Styles.start}>
                        <View style = {Styles.dateContainer}>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>Start: </Text>2/3/2018</Text>
                            <Text style = {Styles.dateInfo}><Text style = {Styles.dateTitle}>End: </Text>8/3/2018</Text>
                        </View>
                        <View style = {[Styles.buttonContainer, {transform:[{rotate: '90 deg'}]}]}>
                            <Icon name = "md-more" />
                        </View>
                    </View>
                    <View style = {Styles.subContract}>
                        <View style = {Styles.subContractTitle}><Text style = {Styles.subContractTitleText}>Subcontractor:</Text></View>
                        <View style = {Styles.subContractText}><Text style = {Styles.subContractNameText}>Subcontractor name</Text></View>
                    </View>
                    <View style = {Styles.defect}>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Defects</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text adjustsFontSizeToFit style = {Styles.optionsText}>Inspections</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Issues</Text></TouchableOpacity>
                        <TouchableOpacity style = {Styles.options}><Text style = {Styles.optionsText}>Files</Text></TouchableOpacity>
                    </View>
                    <View style = {Styles.button}>
                        <Button block style = {Styles.openButton}><Text style = {Styles.openButtonText}>Reopen</Text></Button>
                        <Button block disabled style = {Styles.disabledButton}><Text>Finish</Text></Button>
                        <Button block style = {Styles.detailsButton} onPress = {this._handleDetails}><Text>Details</Text></Button>
                    </View>
                </View>
            </ScrollView>
            </View>
        )
    }
}

export default Stages;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E3E3E3"
    },

    cardContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
        width: "90%",
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 5,
        elevation: 10
    },

    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E3E3E3",
        borderTopRightRadius: 5,
    },

    defectStatusColor: {
        flex: 1,
        backgroundColor: "green",
        height: "100%",
        margin: 0,
        padding: 0,
        borderTopLeftRadius: 5,

    },

    defectName: {
        flex: 20,
        paddingVertical: 10,
        paddingLeft: 10,
    },

    defectStatus: {
        flex: 9,
        paddingVertical: 10,
    },

    start: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 10,
        backgroundColor: "#fff"
    },

    dateContainer: {
        flex: 3,
        flexDirection: 'row',

    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    subContract: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 10,
    },

    subContractTitle: {
        flex: 1,
    },

    subContractTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    subContractText: {
        flex: 1
    },

    subContractNameText: {
        fontSize: 16,

    },

    defect:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },

    button: {
        flex: 1,
        flexDirection: 'row',
    },

    defectNameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    defectStatusText:{
        fontSize: 18,
        alignSelf: 'flex-end',
        paddingHorizontal: 7,
    },

    dateInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 8,
    },

    dateTitle:{
        fontWeight: 'bold',
    },

    options: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    optionsText: {
        fontSize: 16
    },

    openButton: {
        flex: 2,
        backgroundColor: "#192a56",
        margin: 6,
    },

    disabledButton: {
        flex: 2,
        margin: 6,
    },

    detailsButton: {
        flex: 1,
        margin: 6,
        backgroundColor: "#fff",
        elevation: 10
    },
    openButtonText: {
        color: "#FFF"
    }

});