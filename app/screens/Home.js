import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AreaSelect from '../../app/components/AreaSelect/index.js'
import { styles } from '../../app/config/styles.js'


class Home extends React.Component {
    render(props) {
        const navigation = this.props.navigation;

        return (
                    <View style={styles.container}>
                    <Text style={styles.masthead}>circuit.town - bouldering circuits</Text>

                    <View style={styles.areasChoice}>
                    <Text style={styles.brightTextShadow}>areas</Text>
                    <AreaSelect 
                    navigation = {navigation}
                    />
                    </View>
                    </View>
        );
    };
}

export default Home;
