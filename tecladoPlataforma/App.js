import React, { useState } from 'react';
import {
  Platform,
  Image,
  Text
} from 'react-native';

import styled from 'styled-components/native';

import Header from './src/components/Header';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:#2b2b2b;
`;

const Logo = styled.Image`
  width:100px;
  height:100px;
  background-color:#333333;
  margin-bottom:20px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  border:1px solid #888888;
  background-color:#555555;
`;

const KeyBoardArea = styled.KeyboardAvoidingView`
  width:100%;
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Goal = styled.Image`
  width:50px;
  height:50px;
  background-color:#2b2b2b;
  align-self:flex-end;
  margin:10px;
`;

export default () => {

  const [status, setStatus] = useState('');

  return (
    <Page>
      <Header></Header>
      <KeyBoardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Logo source={require('./src/assets/images/axe.png')}></Logo>
        <Input></Input>
      </KeyBoardArea>
      <Goal
        source={{ uri: 'https://img.pngio.com/goal-png-transparent-images-pictures-photos-png-arts-goals-and-objectives-png-400_275.png' }}
        defaultSource={require('./src/assets/images/noimage.png')}
        onLoadStart={() => setStatus('Carregando...')}
        onLoad={() => setStatus('')}
      ></Goal>
      <Text style={{ color: '#fff' }}>{status}</Text>
    </Page>
  )
}