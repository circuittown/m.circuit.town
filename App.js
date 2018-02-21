import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    ListView,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './app/screens/Home.js'
import Area from './app/screens/Area.js'

const RootStack = StackNavigator({
  Home: { screen: Home },
  Area: { screen: Area }
},
    {
        initialRouteName: 'Home',
        headerMode:'none'
    });



export default class circuittown extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            'areaId':34
//        };
//
//
//        this.setAreaId = this.setAreaId.bind(this);
//    }
//
//    setAreaId(areaId) {
//        console.log("handleAreaChange function");
//        this.setState({'areaId': areaId});
//    }
//
    render() {
        return <RootStack />;

        const areaId = this.state.areaId;
        const setAreaId = this.setAreaId;

        return ( <App 
                   areaId = {areaId} 
                    setAreaId = {setAreaId}
                    />);
    }
}
//
//AppRegistry.registerComponent('circuittown', () => circuittown);
