import React, { Component } from 'react';
import {
    AppRegistry,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

export default class AreaDetail extends React.Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const areaId = params ? params.areaId : null;

        this.state = {
            areaId:  areaId,
            isLoading: true,
            dataSource:{}
        }
    }

    componentDidMount() {
        var comp = this;

        this.getArea({area_id:this.state.areaId})
           .then(function(res) {
               var area = res;

               comp.setState({
                   isLoading: false,
                   dataSource: area
               }, function() {
               });
           })
    }



    render() {
        if (this.state.isLoading) {
            return (
                        <View style={{flex: 1, paddingTop: 20}}>
                        <ActivityIndicator />
                        </View>
            );
        }

        return (
                        <View style={{flex: 1, paddingTop: 20}}>
                        <ActivityIndicator />
                        </View>
        );
    }

    async getArea(args) {
        var area_id = args.area_id;
        try {
            let response = await fetch('http://172.20.10.3:8000/api/getArea/'+area_id);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
}

AppRegistry.registerComponent('AreaSelect', () => AreaSelect);

