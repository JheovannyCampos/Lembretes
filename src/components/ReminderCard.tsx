import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ReminderCardProps extends TouchableOpacityProps {
    reminder: string;
    day: number;
    month: number;
    year: number;
    time: string;
}

export function ReminderCard({day, month, year, time, reminder, ...rest } : ReminderCardProps){
    return(
        <TouchableOpacity
            style={style.buttonReminder}
            {...rest}
        >
            <Text style={style.textReminder}>{reminder}</Text>
            <Text>{day}/{month}/{year}</Text>
            <Text>{time}</Text>
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