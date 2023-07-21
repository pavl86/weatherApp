import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loafing() {
    return (<View style={styles.container}>
        <Text style={styles.text}>Загрузка погоды...</Text>
    </View>)
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