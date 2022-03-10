import React from 'react'
import { View, StyleSheet, SafeAreaView, Text,Image } from 'react-native';
const spin = require('../../assets/spin.gif')
const Loader = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={spin}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34dcde',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:9000
    }
});
export default Loader
