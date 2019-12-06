import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  StatusBar
} from 'react-native';

import styled from 'styled-components';

import AsyncStorage from '@react-native-community/async-storage';



const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center; 
  background-color:#262573; 
`;

const Input = styled.TextInput`
  font-size:15px;
  border: 1px solid #000;
  height: 50px;
  width:90%;
  margin-top:30px;
  margin-bottom:30px;
  padding: 0 20px;
  background-color:#fff; 
`;

const NomeView = styled.View`
  margin-top:30px;
  padding:20px;
  background-color:#7a4791;
  width: 100%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

const Box = styled.View`
  width:100%;
  height:100%;
  background-color:rgba(92, 16, 69, 0.6);
`;

export default () => {

  useEffect(() => {
    getNome();
  }, []);

  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

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
      <StatusBar
        barStyle="light-content"
        backgroundColor="#262573"
        hidden={false}
        animated={true}
      ></StatusBar>

      <Input
        placeholder="Digite um nome"
        value={novoNome}
        onChangeText={setNovoNome}
      ></Input>
      <Button
        title="Salvar"
        onPress={handleSave}
      ></Button>

      <NomeView>
        <Nome>{nome}</Nome>
      </NomeView>

      <Button title="Exibir" onPress={() => setModalVisible(true)}></Button>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <Box>
          <Button title="Fechar" onPress={() => setModalVisible(false)}></Button>
        </Box>
      </Modal>
    </Page>

  );
};
