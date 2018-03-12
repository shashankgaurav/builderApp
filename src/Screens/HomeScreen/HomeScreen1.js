import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Icon from "react-native-vector-icons/Ionicons";

import { firstAction } from "../../Actions/index";

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.firstAction("Hey! Redux is working fine.");
    }

    render() {
        console.log(this.props)
        return(
            <View>         
                <Text>{this.props.text}</Text>
            </View>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({firstAction}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeScreen);