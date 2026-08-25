import {   StyleSheet, Text, View, Button, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import { TextInput } from 'react-native';

export default function RepText() {
    const [text, setText] = useState();
    const [enviar, setEnviar] = useState();

    return(
        <View style={misEstilso.container}>
            <View style={{height:'50%'}}>
            <ScrollView style={misEstilso.scroll}>
            <Text>{enviar}</Text> 
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text> 
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text> 
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text> 
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text> 
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
            <Text>{enviar}</Text>
              </ScrollView>
            </View>
            <View style={{height:'50%'}}>
            <TextInput
                style={misEstilso.input}
                placeholder="Escribe aqui.."
                defaultValue={text}
                onChangeText={t=>setText(t)}
            />
            <Button
                title="Enviar"
                onPress={()=>{
                    setEnviar(text)
                    alert("Texto enviado con exito: ")
                }}

            />
        </View>
     </View>
    );
}

const misEstilso = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: '#eee',
    },
    scroll:{
        width: Dimensions.get('window').width,
    },

});