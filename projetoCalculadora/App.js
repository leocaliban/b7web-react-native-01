import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button
} from 'react-native';

import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  background-color:#2b2b2b
`;

const HeaderText = styled.Text`
  font-size:25px;
  color: #2aff1f;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  color:#2aff1f;
  font-size:18px;
  padding:0 15px;
  margin-top:20px;
  border-radius:8px;
  background-color:#000;
  border:1px solid #2aff1f;
`;

const ResultArea = styled.View`
  width:100%;
  margin-top: 20px;
  background-color:#1B161A;
  padding:20px;
  justify-content:center;
  align-items:flex-start;
`;

const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
  color:#F2F2F2;
  `;

const ResultItem = styled.Text`
  font-size:18px;
  color:#F2F2F2;
  margin-bottom:20px;
`;


export default () => {
  const [valor, setValor] = useState('');
  const [taxa, setTaxa] = useState(0);
  const [taxValue, setTaxValue] = useState(10);

  const handleSubmit = () => {
    let nValor = parseFloat(valor);

    if (nValor) {
      setTaxa((taxValue/ 100) * nValor);
    } else {
      alert('Digite o valor da compra.');
    }
  };

  return (
    <Page>
      <HeaderText>Calcular Taxa</HeaderText>
      <Input
        placeholder="Valor da conta"
        placeholderTextColor="#878787"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.taxArea}>
        <TouchableOpacity
          style={styles.taxButton}
          onPress={handleSubmit}
        >
          <Text
            style={[styles.buttonText, { color: '#2b9925' }]}
            onPress={() => setTaxValue(5)}
          >
            5%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.taxButton}
          onPress={handleSubmit}
        >
          <Text
            style={[styles.buttonText, { color: '#d2d91a' }]}
            onPress={() => setTaxValue(10)}
          >
            10%
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.taxButton}
          onPress={handleSubmit}
        >
          <Text
            style={[styles.buttonText, { color: '#d97d1a' }]}
            onPress={() => setTaxValue(15)}
          >
            15%
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.taxButton}
          onPress={handleSubmit}
        >
          <Text
            style={[styles.buttonText, { color: '#d91a1a' }]}
            onPress={() => setTaxValue(20)}
          >
            20%
        </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          Calcular {taxValue}{taxValue? '%':''}
        </Text>
      </TouchableOpacity>

      {taxa > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da conta:</ResultItemTitle>
          <ResultItem>R$ {parseFloat(valor).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor do taxa:</ResultItemTitle>
      <ResultItem>R$ {parseFloat(taxa).toFixed(2)} ({taxValue}%)</ResultItem>

          <ResultItemTitle>Valor total:</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(valor) + parseFloat(taxa)).toFixed(2)}</ResultItem>
        </ResultArea>
      )}

    </Page>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    width: '50%',
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28788d',
  },
  buttonText: {
    fontSize: 16,
    color: '#F4F8F9',
    fontWeight: 'bold',
  },
  taxArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginTop: 20
  },
  taxButton: {
    height: 42,
  }
});