import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,
    StatusBar,
} from "react-native"

import { Button } from "../components/button";
import { ReminderCard } from "../components/ReminderCard";
// import  DatePicker  from "react-native-datepicker";

interface ReminderData{
    id: string;
    name: string;
}

export function Home(){ 
    //const[date, setDate] = useState("");
    const [newReminder, setNewReminder] = useState("");
    const [myReminder, setMyReminder] = useState<ReminderData[]>([]);
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
          setGreeting("Bom dia!");
        } else if (currentHour >= 12 && currentHour < 18) {
          setGreeting("Boa tarde!");
        } else {
          setGreeting("Boa noite!");
        }
    }, []);

    function handleAddNewReminder(){
        const data = {
            id: String(new Date().getTime()),
            name: newReminder
        }
        setMyReminder((oldState) =>[...oldState, data]);
        setNewReminder('')
    }

    function handleRemoveReminder(id: string){
        setMyReminder(oldState => oldState.filter(
            reminder => reminder.id !== id
        ))
    }

    return(
        <View style={style.container} >
            <StatusBar barStyle="light-content"/>
            <Text style={style.title}>Seja bem-vindo, Jheovanny</Text>
            <Text style={style.greetings}>{greeting}</Text>
            <TextInput
                style={style.input}
                placeholder="Novo Lembrete"
                placeholderTextColor="#555"
                onChangeText={setNewReminder}
                value={newReminder}
            />
            {/* <DatePicker
                format="DD-MM-YYYY"
                date={date}
                onDateChange={date => setDate(date)}
            /> */}
            <Button title="Adicionar" onPress={() => handleAddNewReminder()}/>
            <Text style={[style.title, {marginVertical: 50}]}>Meus Lembretes</Text>
            <FlatList 
                data={myReminder}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<ReminderCard reminder={item.name} onPress={() => handleRemoveReminder(item.id)}/>)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#121015",
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#1f1e25",
        color: "#FFF",
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#274aaa",
      },
      greetings: {
        color: "#fff",
      },
})