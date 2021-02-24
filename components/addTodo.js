import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add new todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='#ff751a' style={styles.btn} onPress={pressHandler} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});