import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, TextInput, Button } from 'react-native';

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
  border:2px solid #ccc;
  border-radius:6px;
  background-color:#fff;
  margin-top:100px;
`;

const Box = styled.View`
  width:200px;
  height:200px;
  border:2px dashed #ccc;
  border-radius:6px;
  background-color:#000000;
  margin-top:10px;
  align-items:center;
  justify-content:center;
`;

const Texto = styled.Text`
  color:#ffd900;
  font-size:20px;
`;

const State = () => {
  const [nome, setNome] = useState('Jack');
  const [resultado, setResultado] = useState(false);

  const handleClick = () => {
    setResultado(resultado ? false : true);
  }

  return (
    <Page>
      <Label name="Passando texto como propriedade" />
      <Input value={nome} onChangeText={setNome}></Input>

      <Button title={resultado ? 'Ocultar nome' : 'Exibir nome'} onPress={handleClick} />

      {resultado && (
        <Box>
          <Texto>{nome}</Texto>
        </Box>
      )}

    </Page>
  );
}

export default State;