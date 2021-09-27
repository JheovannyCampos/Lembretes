import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native"

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({title, ...rest} : ButtonProps){
    return (
        <TouchableOpacity
            style={style.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "#274aaa",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20,
        marginVertical: 7,
      },
      buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
      },
})