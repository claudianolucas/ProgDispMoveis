import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('0');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
    setInputValue('0');
  };

  const handleInputChange = (text) => {
    const value = parseInt(text, 10);
    if (isNaN(value) || value <= 0) {
      setInputValue('0');
      setCount(0);
      alert('ë')
      keyboardType: "numeric";
    } else {
      setInputValue(text);
      setCount(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={handleInputChange}
        maxLength={5}
      />
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="+" color="#00C853" onPress={increment} />
        </View>
        <View style={styles.button}>
          <Button title="-" color="#FF1744" onPress={decrement} />
        </View>
        <View style={styles.button}>
          <Button title="Zerar" onPress={reset} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  count: {
    fontSize: 80,
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});