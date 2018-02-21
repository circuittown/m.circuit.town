import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Picker,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

export default class AreaSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dataSource:{},
            areaId: this.props.areaId
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

    areaPick() {
        var areaId = this.state.areaId;
        this.props.navigation.navigate('Area', {areaId:areaId});
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
                    <View>
                    <Picker style={{backgroundColor:'white'}}
                    mode='dropdown'
                    selectedValue={this.state.areaId}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState(() => {
                        console.log(itemValue);
                            return {areaId: itemValue}
                        });

                    }}
                        >
                    <Picker.Item label='-select an area-' value='' key='' />
                    { this.state.dataSource.map((item, key)=>(
                                    <Picker.Item label={item.area} value={item.area_id} key={key} />)
                    )}

                    </Picker>
                    <Button
                    onPress={() => {
                        this.areaPick();
                    }}
                    title="Go"
                    color="#841584"
                    accessibilityLabel="Pick a climbing area"
                    />
                    </View>
        );
    }

    async getAreas() {
        try {
            let response = await fetch('http://172.20.10.3:8000/api/getAreas');
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
}

AppRegistry.registerComponent('AreaSelect', () => AreaSelect);
