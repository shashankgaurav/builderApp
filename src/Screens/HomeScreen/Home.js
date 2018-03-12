import React, { Component } from 'react';
import { Dimensions } from "react-native";
import HomeScreenLandscape from "./HomeScreenLandscape";
import HomeScreenPortarit from "./HomeScreenPortrait";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchDashboardAction }from "../../Actions/fetchDashboardAction/fetchDashboardAction";


class Home extends Component {

    static navigatorStyle = {
        navBarBackgroundColor: '#0172D2',
        navBarComponentAlignment: 'fill'
    }

    constructor(props){
        super(props);

        this.state = {
            viewMode: Dimensions.get("window").height > 500 ? "landscape" : "landscape",
            isFetched: false
        }

        Dimensions.addEventListener("change", dims => {
            this.setState({
                viewMode: Dimensions.get("window").height > 500 ? "landscape" : "landscape"
            });
        })

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    }

    componentDidMount() {
        this.props.fetchDashboardAction();
    }

    componentWillReceiveProps = (nextProp) => {
        if(nextProp.dashboard !== null && nextProp.dashboard !== []){
            this.setState({isFetched: true})
        }
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawer"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    render() {
        const view = this.state.viewMode;

        if(!this.state.isFetched){
            return null;
        }

        if(view === "landscape"){
            return <HomeScreenLandscape />
        } else {
            return <HomeScreenPortrait />
        }
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

export default connect(mapStateToProps, mapDispatchToProps) (Home);