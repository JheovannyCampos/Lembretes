import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ReminderCardProps extends TouchableOpacityProps {
    reminder: string;
    day: number;
    month: number;
    year: number;
    time: string;
}

export function ReminderCard({day, month, year, reminder, ...rest } : ReminderCardProps){
    return(
        <TouchableOpacity
            style={style.buttonReminder}
            {...rest}
        >
            <Text style={style.textReminder}>`${reminder} <br></br> ${day} ${month} ${year}`</Text>
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