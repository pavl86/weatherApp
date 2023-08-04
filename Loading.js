import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' />
            <Text style={styles.text}>Загрузка погоды...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 70,
        backgroundColor: "#FDF6AA"

    },
    text: {
        color: "#f0f",
        fontSize: 30,
    }
})