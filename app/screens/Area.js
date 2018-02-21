import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AreaSelect from '../../app/components/AreaSelect/index.js'
import AreaDetail from '../../app/components/AreaDetail/index.js'
import { styles } from '../../app/config/styles.js'


class Area extends React.Component {
    render(props) {
        const { params } = this.props.navigation.state;
        const areaId = params ? params.areaId : null;
        const navigation = this.props.navigation;

        return (
                    <View style={styles.container}>
                    <Text style={styles.masthead}>circuit.town - bouldering circuits {areaId}</Text>

                    <View style={styles.areasChoice}>
                    <Text style={styles.brightTextShadow}>areas</Text>
                    <AreaSelect 
                    areaId = {areaId}
                    navigation = {navigation}
                    />

                    <AreaDetail
                    areaId = {areaId}
                    navigation = {navigation}
                    />
                    </View>

                    <Text>{areaId}</Text>
                    </View>
        );
    };
}

export default Area;
