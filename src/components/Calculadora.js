import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Calculadora = () => {
  const [hipotenusa, setHipotenusa] = useState(null);

  const [catetoA, setCatetoA] = useState(0);
  const [catetoB, setCatetoB] = useState(0);

  function calcularHipotenusa() {
    setHipotenusa(
      'Hipotenusa: ' + Math.sqrt(catetoA * catetoA + catetoB * catetoB),
    ),
      setCatetoA(''),
      setCatetoB('');
  }
  //Tentei fazer com o Math.hypot, mas ele não funcionou, retornava apenas a soma dos quadrados

  return (
    <View>
      <Text style={styles.titulo}>Calculadora de Hipotenusas</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o Cateto a"
        autoCorrect={false}
        keyboardType="numeric"
        value={catetoA}
        onChangeText={setCatetoA}
      />
      <TextInput
        style={styles.input}
        placeholder="Informe o Cateto b"
        autoCorrect={false}
        keyboardType="numeric"
        value={catetoB}
        onChangeText={setCatetoB}
        text
      />
      <Text style={styles.texto}>{hipotenusa}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={calcularHipotenusa}
        activeOpacity={0.5}
      >
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  titulo: {
    color: '#000080',
    fontSize: 50,
    textAlign: 'center',
    padding: 50,
  },
  texto: {
    color: '#000080',
    fontSize: 35,
    textAlign: 'center',
    padding: 40,
  },
  botao: {
    backgroundColor: '#708090',
    padding: 10,
    width: 250,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#000080',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    color: '#000080',
    backgroundColor: '#C0C0C0',
    padding: 15,
    borderRadius: 25,
    marginTop: 25,
    marginEnd: 150,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 25,
  },
});
