import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from "native-base";

class CollapsableCard extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            isOpen: false,
        }
    }

    _toggleState = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {

        return (
            <View style = {Style.collapseCard}>
                <View style = {Style.collapseCardHeader}>
                    <Text style = {Style.collapseCardHeader}>{this.props.title}</Text>
                    {(!this.state.isOpen) ? <Icon name = "ios-add" style = {Style.collapseCardHeaderIcon} onPress = {this._toggleState}/> : <Icon name = "ios-close" style = {Style.collapseCardHeaderIcon} onPress = {this._toggleState}/>}
                </View>
                {(this.state.isOpen) ? (<View style = {Style.collapseCardBody}>
                    <View style = {Style.inspectionToDo}>
                        <View style = {Style.inspectionToDoHeader}>
                            <Text style = {Style.inspectionToDoHeaderText}>Inspections to do</Text>
                        </View>
                        <View style = {Style.inspectionToDoBody}>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>                            
                        </View>
                    </View>
                    <View style = {Style.issueToClose}>
                    <View style = {Style.inspectionToDoHeader}>
                            <Text style = {Style.inspectionToDoHeaderText}>Issues To Close</Text>
                        </View>
                        <View style = {Style.inspectionToDoBody}>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>
                            <View style = {Style.inspectionToDoBodyRow}>
                                <View style = {Style.inspectionToDoBodyRowSection}>
                                    <Text style = {Style.inspectionToDoBodyRowSectionText}>Lorem Ipsum</Text>
                                    <Icon name = "md-checkmark-circle-outline" style = {[Style.inspectionToDoBodyRowSectionIcon, {color: "orange"}]}/>
                                </View>
                                <View style = {Style.inspectionToDoBodyRowIcon}>
                                    <Icon name = "md-arrow-dropright-circle" style = {Style.inspectionToDoBodyRowSectionIcon}/>
                                </View>
                            </View>                            
                        </View>
                    </View>
                </View>) : null}
            </View>
        )
    }


}

export default CollapsableCard;

const Style = StyleSheet.create({
    collapseCard: {
        flex: 1,
        elevation: 10
    },

    collapseCardHeader: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#636363",
        fontSize: 20,
        alignSelf: 'center',
        padding: 6,
    },

    collapseCardHeaderIcon: {
        alignSelf: 'flex-end',
        padding: 6,
        color: "#fff"
    },

    collapseCardBody: {
        flex: 1
    },

    inspectionToDo: {
        flex: 1
    },

    issueToClose: {
        flex: 1 
    },

    inspectionToDoHeader: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },

    inspectionToDoHeaderText: {
        fontSize: 16,
        color: "#000",
        marginTop: 7,
        padding: 6
    },

    inspectionToDoBody: {
        flex: 1
    },

    inspectionToDoBodyRow: {
        flex: 1,
        flexDirection: 'row',
    },

    inspectionToDoBodyRowSection: {
        flex: 1,
        flexDirection: 'row',
    },

    inspectionToDoBodyRowSectionText: {
        flex: 5,
        fontSize: 16,
        color: "#918e8e",
        padding: 7,
        marginHorizontal: 5,
        alignSelf: 'center',
    },

    inspectionToDoBodyRowSectionIcon: {
        flex: 1,
        padding: 7,
        marginHorizontal: 5,
        alignSelf: 'center',
    }

})