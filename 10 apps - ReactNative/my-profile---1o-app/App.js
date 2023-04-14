import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App extends Component{
  render(){


    let nome = 'Lucas Claudiano de Moraes Gouveia';
    let img = 'https://avatars.githubusercontent.com/u/14234139?v=4';

    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text style={{textAlignVertical: "center",textAlign: "center",color: '#FF0000', fontSize: 25, margin: 15,}}>My Profile</Text>
        

<Image
  source={{
    uri:
      'https://avatars.githubusercontent.com/u/14234139?v=4',
  }}
  style={{
    width: 170,
    height: 170,
    borderRadius: 200 / 2,
    marginLeft: '25%',
  }}
/>
      {/* CASO QUEIRA ALINHADO A ESQUERDA <Text style={{ fontSize: 30 }}>{nome}</Text>*/}
<Text style={{textAlignVertical: "center",textAlign: "center",color: '', fontSize: 25, margin: 15,}}>{nome}</Text>


<Text style={{textAlignVertical: "center",textAlign: "center",color: '#39ff14', fontSize: 25, margin: 15,backgroundColor:'#000000',borderRadius: 200/2}}>Academic Education:</Text>
 <Text>- Administrative technician</Text>
  <Text>- English</Text>
   <Text>- Computer Technician</Text>

<Text style={{textAlignVertical: "center",textAlign: "center",color: '#39FF14', fontSize: 25, margin: 15, textAlignVertical: "center",
  textAlign: "center", backgroundColor:'#000000',borderRadius: 200/2}}>Experience :</Text>
 <Text s>- Computer Technician</Text>
  <Text>- IT Support Traine</Text>
   <Text>teste</Text>

<Text style={{textAlignVertical: "center",textAlign: "center",color: '#39ff14', backgroundColor:'#000000',borderRadius: 200/2,  fontSize: 25, margin: 15,}}>Projects :</Text>
 <Text style={{textAlignVertical: "center",textAlign: "center",color: '#000000', fontSize: 11, margin: 15}}>- Aplicativos Hibridos em React</Text>
 <Text style={{textAlignVertical: "center",textAlign: "center",color: '#000000', fontSize: 11, margin: 15}}>- Aplicativos em Swift</Text>
 <Text style={{textAlignVertical: "center",textAlign: "center",color: '#000000', fontSize: 11, margin: 15}}>- Banco em Cobol</Text>
      </View>
    )
  }
}


export default App;
