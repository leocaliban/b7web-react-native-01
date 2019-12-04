import React from 'react';
import {
  Platform
} from 'react-native';

import styled from 'styled-components/native';

import Header from './src/components/Header';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:#2b2b2b;
`;

const Logo = styled.View`
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

export default () => {

  return (
    <Page>
      <Header></Header>
      <KeyBoardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Logo></Logo>
        <Input></Input>
      </KeyBoardArea>
    </Page>
  )
}