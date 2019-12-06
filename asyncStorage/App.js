import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styled from 'styled-components';

import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const Input = styled.TextInput`
  font-size:15px;
  border: 1px solid #000;
  height: 50px;
  width:90%;
  margin-top:50px;
  margin-bottom:50px;
  padding: 0 20px;
`;

const Salvar = styled.Button`

`;

const NomeView = styled.View`
  margin-top:50px;
  padding:20px;
  background-color:#7a4791;
  width: 100%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

export default () => {

  useEffect(() => {
    getNome();
  }, []);

  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const handleSave = async () => {
    if (novoNome !== '') {
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      setNovoNome('');
    }
  };

  const getNome = async () => {
    const storagedName = await AsyncStorage.getItem('@nome');
    setNome(storagedName);
  };

  return (
    <Page>
      <Input
        placeholder="Digite um nome"
        value={novoNome}
        onChangeText={setNovoNome}
      ></Input>
      <Salvar
        title="Salvar"
        onPress={handleSave}
      ></Salvar>

      <NomeView>
        <Nome>{nome}</Nome>
      </NomeView>
    </Page>

  );
};
