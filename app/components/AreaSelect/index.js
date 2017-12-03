import React, { Component } from 'react';
import {
    AppRegistry,
    Picker,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

export default class AreaSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        var comp = this;

        this.getAreas()
           .then(function(res) {
               var areas = res;

               comp.setState({
                   isLoading: false,
                   dataSource: areas
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
                    <Picker style={{backgroundColor:'white'}}
                    mode='dropdown'
                    selectedValue={this.state.area_id}
                    onValueChange={(itemValue, itemIndex) => this.setState({area_id: itemValue})}>
                    <Picker.Item label='-select an area-' value='' key='' />
                    { this.state.dataSource.map((item, key)=>(
                                    <Picker.Item label={item.area} value={item.area_id} key={key} />)
                    )}

                    </Picker>
        );
    }

    async getAreas() {
        try {
            let response = await fetch('http://192.168.1.48:8000/api/getAreas');
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
}

AppRegistry.registerComponent('AreaSelect', () => AreaSelect);
