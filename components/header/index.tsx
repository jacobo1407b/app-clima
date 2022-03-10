import React, { FunctionComponent } from 'react';
import { mainState, ResponseClima } from '../../types';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    dataProvider?: mainState,
    climaData?: ResponseClima,
}
const Header: FunctionComponent<IProps> = ({ dataProvider, climaData }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLocation}>{dataProvider?.LocalizedName}</Text>
            <Text style={styles.centigrados}>{climaData?.Temperature.Metric.Value} {climaData?.Temperature.Metric.Unit}°</Text>
            <Text style={styles.texTipe}>{climaData?.WeatherText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLocation: {
        fontSize: 30,
        color: '#ffff'
    },
    centigrados: {
        fontSize: 100,
        color: '#ffff'
    },
    texTipe: {
        fontSize: 20,
        color: '#ffff'
    }
});


export default Header