import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
  font-size:18px;
  height:50px;
  background-color:#000;
  padding:0 15px;
  color:#2aff1f;
  border-radius:8px;
  border:1px solid #2aff1f;
  margin-top:20px;
`;

export default () => {
  const [valor, setValor] = useState('');
  return (
    <Page>
      <HeaderText>Calculadora</HeaderText>
      <Input
        placeholder="Valor da conta"
        placeholderTextColor="#878787"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
    </Page>
  );
}