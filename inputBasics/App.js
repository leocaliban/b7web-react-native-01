import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, TextInput } from 'react-native';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:#332c2b;
  align-items:center;
  justify-content:center;
  `;

const Label = (props) => {
  const [nome, setNome] = useState('Valor Inicial no State');
  return (
    <Text style={{ color: '#fff' }}>{props.name} - {nome}</Text>
  );
}

const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #ccc;
  border-radius:6px;
  background-color:#fff;
  margin-top:100px;
`;

const State = () => {
  const [nome, setNome] = useState('Jack');
  return (
    <Page>
      <Label name="Passando texto como propriedade" />
      <Input value={nome} onChangeText={setNome}></Input>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Nome: {nome}</Text>
    </Page>
  );
}

export default State;