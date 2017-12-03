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

import AreaSelect from './app/components/AreaSelect/index.js'
import Home from './app/screens/Home.js'
import { styles } from './app/config/styles.js'

//const App = StackNavigator({
//  Home: { screen: Home }
//});

export default class circuittown extends Component {
  render() {
      return (
      <View style={styles.container}>
          <Text style={styles.masthead}>circuit.town - bouldering circuits</Text>
                  
          <View style={styles.areasChoice}>
              <Text style={styles.brightTextShadow}>areas</Text>
              <AreaSelect />
          </View>
     </View>
    );
  }
}

AppRegistry.registerComponent('circuittown', () => circuittown);
