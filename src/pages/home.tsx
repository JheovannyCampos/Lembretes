import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,
    StatusBar,
    Platform,
} from "react-native"

import { Button } from "../components/button";
import { ReminderCard } from "../components/ReminderCard";
import DateTimePicker from '@react-native-community/datetimepicker';


interface ReminderData{
    id: string;
    name: string;
    day: number;
    month: number;
    year: number;
    time: string;
}

export function Home(){ 
  //const[date, setDate] = useState("");
  const [newReminder, setNewReminder] = useState("");
  const [myReminder, setMyReminder] = useState<ReminderData[]>([]);
  const [greeting, setGreeting] = useState("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log(event, selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

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
            name: newReminder,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            time: `${date.getHours()}:${date.getMinutes()}`,
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
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                )}
            <Button onPress={showDatepicker} style={style.buttonTime} title="Data" />
            <Button onPress={showTimepicker} style={style.buttonTime} title="Horário" />
            <Button title="Adicionar" onPress={() => handleAddNewReminder()}/>
            <Text style={[style.title, {marginVertical: 50}]}>Meus Lembretes</Text>
            <FlatList 
                data={myReminder}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<ReminderCard reminder={item.name} 
                  day={item.day} 
                  month={item.month}
                  year={item.year}
                  time={item.time}
                  onPress={() => handleRemoveReminder(item.id)}/>)}
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
      buttonTime: {
        backgroundColor: "#274aaa",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20,
        marginVertical: 7,
      }
})