import React, { FunctionComponent } from 'react';
import { ListHour } from '../../types';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Card from '../card';
import { getHour, getIcon } from '../../utils';


interface ICardClima {
    list: ListHour[]
}

const Listas: FunctionComponent<ICardClima> = ({ list }) => {
    return (
        <Card>
            <ScrollView horizontal>
                {list?.map((poste, i) => (
                    <View key={i} style={styles.viewContainer}>
                        <Text
                            style={styles.txt}
                        >
                            {getHour(poste.DateTime)}
                        </Text>
                        <Image
                            style={{
                                width: 50,
                                height: 50
                            }}
                            source={getIcon(poste.WeatherIcon,getHour(poste.DateTime))}
                        //source={{ uri: getIcon(poste.WeatherIcon) }} 
                        />

                        <Text
                            style={styles.txt}
                        >{poste.Temperature.Value} {poste.Temperature.Unit}°</Text>
                    </View>
                ))}
            </ScrollView>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    viewContainer: {
        margin: 20,
        alignItems: 'center'
    },
    txt: {
        fontSize: 20,
        color: '#ffff'
    }
});

export default Listas