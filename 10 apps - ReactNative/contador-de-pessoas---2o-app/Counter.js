import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
           <Button
             onPress={() => {setCount(count + 1)}} title="+ 1 Pessoa"
           />
           <Button
             onPress={() => {setCount(count - 1)}} title="- 1 Pessoa"
          
           />
           <Button
             onPress={() => {setCount(0)}} title="Reset"
           />
           <Text>O numero de pessoas na é igual a: {count} </Text>
       </View>
   );
}
export default Counter;
