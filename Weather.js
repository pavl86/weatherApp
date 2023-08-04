import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const weahterOptions = {
    Thunderstorm: {
        iconName: 'thunderstorm',
        gradient: ['#141E30', '#243B55'],
        title: 'stay at home',
        subTitle: 'Have you seen what it\'s doing outside?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'take an umbrella',
        subTitle: 'perhaps the rain will intensify'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: 'it\'s raining outside',
        subTitle: 'perhaps there will be a rainbow soon'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'it\'s snowing outside',
        subTitle: 'dress warmly'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'it\'s dusty outside',
        subTitle: 'close the windows'
    },
    Smoke: {
        iconName:'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'it\'s smog outside',
        subTitle: 'low visibility'
    },
    Haze: {
        iconName:'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'it\'s snowing outside',
        subTitle: 'dress warmly'
    },
    Mist: {
        iconName:'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'it\'s smog outside',
        subTitle: 'low visibility'
    },
    Fog: {
        iconName: 'ios-eye-off',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'it\'s smog outside',
        subTitle: 'low visibility'
    },
    Tornado: {
        iconName: 'skull',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'stay at home',
        subTitle: 'it\'s dangerous outside'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'it\'s sunny outside',
        subTitle: 'beautiful weather'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'it\'s cloudy outside',
        subTitle: 'good time for a walk'
    },

}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weahterOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weahterOptions[condition].iconName} size={96} color={'white'} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weahterOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weahterOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm', 
        'Drizzle', 
        'Rain', 
        'Snow', 
        'Mist', 
        'Smoke', 
        'Haze', 
        'Dust', 
        'Fog', 
        'Tornado', 
        'Clear', 
        'Clouds'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'left'
    },
    subTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})