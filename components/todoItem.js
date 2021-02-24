import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 20,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#e2e8e9',
    borderStyle: "dashed",
    borderRadius: 10,
  }
});