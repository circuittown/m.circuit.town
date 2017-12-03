import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AreaSelect from '../../app/components/AreaSelect/index.js'


const Home = (props) => {
      return (
      <View style={styles.container}>
          <Text style={styles.masthead}>circuit.town - bouldering circuits</Text>
                  
          <View style={styles.areasChoice}>
              <Text style={styles.brightTextShadow}>areas</Text>
              <AreaSelect />
          </View>
     </View>
    );
};

//Home.propTypes = {
//  navigation: React.PropTypes.object,
//};

export default Home;
