import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, StatusBar, Image, ProgressBarAndroid, ScrollView } from "react-native";
import * as Progress from 'react-native-progress';
import { Style } from "../../Styles/HomeScreenStyle/HomeScreenPortraitStyle";

class HomeScreenPortrait extends Component {
    render() {

        const customer = this.props.dashboard.customerDetails;
        return (
            <View style = {Style.main}>
                <StatusBar hidden = {true} />
                <View style = {Style.dashboard}>
                    <Text style = {Style.dashText}>Client Dashboard</Text>
                </View>
                <View style = {Style.profile}>
                    <View style = {Style.section1}>
                        <View style = {Style.profileImage}>
                                <Image source = {require('../../Assets/profile.jpeg')} style = {Style.image}/>
                        </View>
                        <View style = {Style.profileName}>
                                <Text style = {Style.name}>{customer.name}</Text>
                                <Text style = {Style.nameRest}>CEO Yes Bank, Mumbai, </Text>
                                <Text style = {Style.nameRest}>India </Text>
                        </View>
                    </View>
                    <View style = {Style.section1}>
                        <View style = {Style.profileCrn}>
                                <Text style = {Style.crnText}>CRN #12345</Text>
                                <Text style = {Style.crnText}>FRN- 1234N</Text>
                        </View>
                        <View style = {Style.profileAddress}>
                                 <View style = {Style.singleContactView}>
                                        <Image source = {require('../../Assets/phone.png')} style = {Style.iconS} />
                                        <Text style = {Style.addressText}>{customer.mobile}</Text>
                                    </View>
                                    <View style = {Style.singleContactView}>
                                        <Image source = {require('../../Assets/mail.png')} style = {[Style.iconS]} />
                                        <Text style = {Style.addressText}>{customer.email}</Text>
                                    </View>
                        </View>
                    </View>
                    <View style = {Style.section1}>
                        <View style = {Style.profileSince}>
                                <Text style = {Style.crnText}>Client Since - May 25, 2015</Text>
                                <Text style = {Style.crnText}>Last Contacted - Nov 30, 2017</Text>
                        </View>                        
                    </View>
                    <View style = {Style.section1}>
                        <View style = {Style.profileCompleteness}>
                            <Text style = {Style.crnText}>Profile Completeness</Text>
                            <View style = {Style.progressBarStyle}>
                            {/* <ProgressBarAndroid 
                                styleAttr = "Horizontal"
                                indeterminate = {false}
                                progress = {0.3}
                                color = "#3356cc" 
                                backgroundColor = "black"
                                borderRadius = {60}/> */}

                                <Progress.Bar progress = {0.3} 
                                              width = {null} 
                                              borderRadius = {0}/>
                            </View>
                            
                        </View>
                    </View>
                </View>

                <View style = {Style.portfolio}>
                    <View style = {Style.portfolioHead}>
                        <View style = {Style.section2}>
                            <View style = {Style.sectionHeader1}><Text style = {Style.portfolioHeadText1}>Portfolio Snapshot</Text></View>
                            <View style = {Style.sectionHeader2}><Text style = {Style.portfolioHeadText2}>Client Wealth</Text></View>
                        </View>
                    </View>
                    
                    <View style = {Style.portfolioBody}>
                        <View style = {Style.section1}>
                            <View style = {Style.totalCorps}>
                                <Text style = {Style.mainTextPortfolio}>48 Cr</Text>
                                <Text style = {Style.subTextPortfolio}>Total Corp</Text>
                            </View>
                            <View style = {Style.portfolioValue}>
                                <Text style = {Style.mainTextPortfolio}>58 Cr</Text>
                                <Text style = {Style.subTextPortfolio}>Portfolio Value</Text>
                            </View>
                        </View>
                        <View  style = {Style.section1}>
                            <View style = {Style.portfolioReturn}>
                                <Text style = {Style.mainTextPortfolio}>12 %</Text>
                                <Text style = {Style.subTextPortfolio}>Portfolio return FY 17-18</Text>
                            </View>
                            <View style = {Style.portfolioReturnInception}>
                                <Text style = {Style.mainTextPortfolio}>16.9%</Text>
                                <Text style = {Style.subTextPortfolio}>Portfolio return since inception</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                </View> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.nameReducer,
        login: state.login,
        dashboard: state.dashboard
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         ...bindActionCreators(, dispatch)
//     }
// }



export default connect(mapStateToProps, null)(HomeScreenPortrait)