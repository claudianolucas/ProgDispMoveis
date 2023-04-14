import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const cr = alcool / gasolina;
    if (cr < 0.7) {
      setResultado({icone: 'https://cdn-icons-png.flaticon.com/512/5229/5229784.png', mensagem: 'Abasteça com Álcool'});
    } else {
      setResultado({icone: 'https://cdn-icons-png.flaticon.com/512/2933/2933927.png', mensagem: 'Abasteça com Gasolina'});
    }
  }

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
  source={{
    uri:
      'https://garagem360.com.br/wp-content/uploads/2021/07/mitos-verdades-carro-flex.jpg',
  }}
  style={{
    width: 170,
    height: 170,
    borderRadius: 200 / 2,
    marginLeft: '25%',
    alignSelf: 'center',
  }}
/>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>O que abastecer?</Text>
      <Image source={{uri: 'https://url-do-icone.png'}} style={{ width: 100, height: 100, marginBottom: 20 }} />
      <TextInput
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginBottom: 20 }}
        value={gasolina}
        onChangeText={setGasolina}
      />
      <TextInput
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginBottom: 20 }}
        value={alcool}
        onChangeText={setAlcool}
      />
      <TouchableOpacity onPress={calcular} style={{ backgroundColor: '#0d6efd', padding: 10 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Calcular</Text>
      </TouchableOpacity>
      {resultado && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image source={{uri: resultado.icone}} style={{ width: 50, height: 50, marginBottom: 10 }} />
          <Text style={{ fontWeight: 'bold' }}>{resultado.mensagem}</Text>
        </View>
      )}
    </View>
  );
}