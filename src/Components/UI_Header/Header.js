import React, { Component } from 'react';
import { Button, Icon, Header, Left, Right, Body, Title } from "native-base";

class CustomHeader extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
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
        )
    }
}

export default CustomHeader;
