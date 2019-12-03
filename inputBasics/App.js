import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

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

const State = () => {
  return (
    <Page>
      <Label name="Passando texto como propriedade" />
    </Page>
  );
}

export default State;