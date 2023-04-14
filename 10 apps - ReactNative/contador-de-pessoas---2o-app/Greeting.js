import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const Greeting = () => {
    const [name, setName] = useState("Sarah");
    
    return (
        <View>
        <Text></Text>
        <Text></Text>
        <Text style={{textAlignVertical: "center",textAlign: "center",color: '#FF0000', fontSize: 25, margin: 15,}}>Contador de Pessoas</Text>
           <TextInput placeholder="Entre seu nome : "
                      onChangeText={text => setName(text)}
            />
           <Text>Olá {name}!</Text>
        </View>
   );
}
export default Greeting;