import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ReminderCardProps extends TouchableOpacityProps {
    reminder: string;
}

export function ReminderCard({ reminder, ...rest } : ReminderCardProps){
    return(
        <TouchableOpacity
            style={style.buttonReminder}
            {...rest}
        >
            <Text style={style.textReminder}>{reminder}</Text>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    textReminder: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
    },
    buttonReminder: {
      backgroundColor: "#1f1e25",
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      marginBottom: 15,
    },
  });