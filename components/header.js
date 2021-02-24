import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 8,
    backgroundColor: '#ff751a',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});