import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, Image, StatusBar, ScrollView, Dimensions, TouchableOpacity, Switch, CheckBox } from "react-native";
import * as Progress from 'react-native-progress';
import { Style } from "../../Styles/HomeScreenStyle/HomeScreenLandscapeStyle";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Table, Row, Rows } from "react-native-table-component";
import { fetchDashboardAction }from "../../Actions/fetchDashboardAction/fetchDashboardAction";
import { BarChart } from "react-native-svg-charts";
import ChartView from 'react-native-highcharts';
import LinearGradient from 'react-native-linear-gradient';


class HomeScreenLandscape extends Component {

    constructor(props){
        super(props);

        this.state = {
            checked: false,
            isFetched: false
        }

        
    
    }
        
    displayChart = () => {

        var Highcharts='Highcharts';

        var conf = {
         chart: {
               type: 'bar'
         },
         plotOptions: {
           bar: {
               dataLabels: {
                   enabled: true,
                   formatter: function(){
                        return this.y + '%';
                   }
               } 
           }
       },

       exporting: {
            enabled: false
       },
         title: {
                text: 'Client   Wealth'
         },
         xAxis: {
               categories: ['Equity', 'Real Estate', 'Total Portfolio']
         },
         yAxis: {
             title: {
                    text: ''
             },
               labels: {
                       formatter: function () {
                           return this.value + '%';
                       }
               }
         },
         series: [{
               name: 'IRR since inception',
                      data: [25, -2, 16.9],
                      color: '#0080ff',
               }, {
                  name: 'Benchmark IRR',
                   data: [8, 8, 0],
                   color:'#bbbbbb',
               }]
         };

         return (
            <ChartView style={{height:300}} config={conf}></ChartView>
          );
     }
      
     
     linearGradient = () => {
        return <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} />
     }
   



    render() {

        const ele = (value) => (
            <TouchableOpacity >
              <View style={Style.btn}>
                <CheckBox 
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}/>
              </View>
            </TouchableOpacity>
          );

          const customer = this.props.dashboard.customerDetails;
          const transaction = this.props.dashboard.transactionList;


        const tableHead = [ele('line 0'),'DATE', 'INSTRUMENT NAME', 'CLIENT ID', 'QUANTITY', 'AMOUNT'];
        const tableData = transaction.map( (item, i) => {
                                        let row = [];                                        
                                        row.push(ele('line ' + {i} ));
                                        row.push(item.TransactionDate);
                                        row.push(item.InstrumentName);
                                        row.push(item.Id);
                                        row.push(item.Quantity);
                                        row.push(item.Amount);

                                return row;
                            });       

        return (
            <ScrollView style = {Style.main}>
                <StatusBar hidden = {true} />

                {/* //Client Dashboard flag start */}
                <View style = {Style.clientDashboard}>
                    <Text style = {Style.clientDashboardText}>Client Dashboard</Text>
                </View>
                {/* //Client Dashboard flag end */}
                
                {/* //Info screen start */}
                <View style = {Style.landscapeInfoWrapper}>
                    <View style = {Style.landscapeLeftHandSide}>
                        <View style = {Style.landscapePersonalInfo}>
                            <View style = {Style.landscapeImageColumn}>
                                <View style = {Style.landscapeProfileImage}>
                                    <Image source = {require('../../Assets/profile.jpeg')} style = {Style.image} />
                                </View>
                                <View style = {Style.landscapeCrn}>
                                     <Text style = {Style.allText}>CRN #12345</Text>
                                     <Text style = {Style.allText}>FRN- 1234N</Text>
                                </View>
                            </View>
                            <View style = {Style.landscapeContactColumn}>
                                <View style = {Style.landscapeName}>
                                    <Text style = {Style.name}>Mr. {customer.name}</Text>
                                    <Text style = {Style.allText}>CEO Yes Bank, Mumbai, </Text>
                                    <Text style = {Style.allText}>India </Text>
                                </View>
                                <View style = {Style.landscapeContactInfo}>
                                    <View style = {Style.singleContactView}>
                                        <Image source = {require('../../Assets/phone.png')} style = {Style.iconS} />
                                        <Text style = {Style.allText}>{customer.mobile}</Text>
                                    </View>
                                    <View style = {Style.singleContactView}>
                                        <Image source = {require('../../Assets/mail.png')} style = {[Style.iconS]} />
                                        <Text style = {[Style.allText, {color: "#484bff", paddingTop: "1%"}]}>{customer.email}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {Style.landscapeDetailColumn}>
                                <View style = {Style.landscapeClientSince}>
                                    <Text style = {Style.allText}>Client Since - May 25, 2015</Text>
                                    <Text style = {Style.allText}>Last Contacted - Nov 30, 2017</Text>
                                </View>
                                <View style = {Style.landscapeProfileCompleteness}>
                                    <Text style = {Style.allText}>Profile Completeness</Text>
                                    
                                    <Progress.Bar progress = {0.3}
                                                animated = {true} 
                                              width = {null}
                                              height = {10} 
                                              borderRadius = {0}
                                              style = {Style.progress}/>
                                    <Text style = {Style.progressPercentage}>30%</Text>
                                </View>
                            </View>
                        </View>
                        <View style = {Style.landscapePortfolioSnapshot}>
                            <View style = {Style.landscapeTotalCorp}>
                                <View style = {Style.landscapePortfolioHeader}>
                                    <Text style = {Style.portfolioHeaderText}>Portfolio Snapshot</Text>
                                </View>
                                <View style = {Style.landscapePortfolioBody}>
                                    <View style = {Style.section}>
                                        <View style = {Style.totalCorps}>
                                            <Text style = {Style.mainTextPortfolio}>48 Cr</Text>
                                            <Text style = {Style.subTextPortfolio}>Total Corp</Text>
                                        </View>
                                        <View style = {Style.portfolioValue}>
                                            <Text style = {Style.mainTextPortfolio}>58 Cr</Text>
                                            <Text style = {Style.subTextPortfolio}>Portfolio Value</Text>
                                        </View>
                                    </View>
                                    <View  style = {Style.section}>
                                        <View style = {Style.portfolioReturn}>
                                            <Text style = {Style.mainTextPortfolio}>12 %</Text>
                                            <Text style = {Style.subTextPortfolio}>Portfolio return{"\n"}FY 17-18 </Text>
                                        </View>
                                        <View style = {Style.portfolioReturnInception}>
                                            <Text style = {Style.mainTextPortfolio}>16.9%</Text>
                                            <Text style = {Style.subTextPortfolio}>Portfolio return{"\n"}since inception</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = {Style.landscapeClientWealth}>
                                {this.displayChart()}
                            </View>
                        </View>
                    </View>
                    <View style = {Style.landscapeRightHandSide}>
                            <View style = {Style.landscapeOptions}>
                                <TouchableOpacity style={Style.button}>
                                    <Image                                        
                                        source={require('../../Assets/calendar.png')} />
                                    <Text style = {Style.optionText}>Event</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Style.button}>
                                    <Image                                        
                                        source={require('../../Assets/calendar.png')} />
                                    <Text style = {Style.optionText}>Gift</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Style.button, {paddingTop: 10}]}>
                                    <Image                                        
                                        source={require('../../Assets/calendar.png')} />
                                    <Text style = {Style.optionText}>Interaction{"\n"}History</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Style.button, {paddingTop: 10}]}>
                                    <Image                                        
                                        source={require('../../Assets/calendar.png')} />
                                    <Text style = {Style.optionText}>   Archived{"\n"}Documents</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {Style.landscapeRiskProfile}>
                                <View style = {Style.riskProfileHeader}>
                                    <Text style = {Style.riskProfileHeaderText}>Risk Profile</Text>
                                </View>
                                <View style = {Style.riskProfileBody}>
                                    <Text style = {Style.riskProfileBodyText}>!Significant deviation of portfolio from recommended risk profile.
                                    </Text>
                                    <View style = {{marginTop: "20%", marginHorizontal: "5%"}}>
                                    <LinearGradient colors={['#fff', '#FFE5B4', '#ffdab9']} 
                                                    start={{x: 0.0, y: 0.1}} end={{x: 0.7, y: 1.0}}
                                                    locations={[0.0,0.6,1]}
                                            >
                                    <Progress.Bar progress = {0}
                                              width = {null}
                                              height = {25} 
                                              borderRadius = {0}
                                              borderWidth = {0}
                                              style = {Style.riskProfileBar}/>  
                                    </LinearGradient>

                                    <Text style={{alignSelf: "flex-end", marginVertical: "10%", marginVertical: "5%",fontSize: 18}}>Client Portfolio</Text>
                                    </View> 
                                    
                             
                                </View>
                            <View style = {Style.riskProfileFooter}>
                                <Text style = {Style.riskProfileFooterText}>IPS last refresh: over 6 months ago</Text>
                            </View>                             
                        </View>
                        </View>
                        
                    </View>
                {/* //Info Screen end */}

                {/* //Table Start */}
                <View style = {Style.landscapeTableWrapper}>
                   <View style = {Style.tableHeader}>
                        <Text style = {Style.tableHeaderText}>Transaction Tracker</Text>
                   </View>
                   <View style = {Style.tableContent}>
                        <Table style = {Style.mainTable} borderStyle = {{borderWidth: 0 }}>
                            <Row data={tableHead} style={Style.tableHead} textStyle={Style.tableHeadText} flexArr={[.2,1,1,1,1,1,1]}/>
                            <Rows data={tableData} style={Style.tableRow} textStyle={Style.tableText} flexArr={[.2,1,1,1,1,1,1]}/>
                        </Table>
                   </View>
                </View>
                {/* //Table end */}
                

                </ScrollView>

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

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({fetchDashboardAction}, dispatch)
    }
}



export default connect(mapStateToProps, null) (HomeScreenLandscape)