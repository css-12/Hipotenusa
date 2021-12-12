import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calculadora from './src/components/Calculadora';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculadora />
      <StatusBar barStyle="dark-content" backgroundColor="#DCDCDC" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
});
