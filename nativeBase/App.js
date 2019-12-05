import React from 'react';

import styled from 'styled-components/native';

import lista from './src/mocks/lista';

import {
  Button,
  Text,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,

} from 'native-base';

const Page = styled.SafeAreaView`
  flex:1
`;

const Item = styled.View`
  padding: 10px 20px;
  background-color:#bfcbff;
`;

const ItemText = styled.Text`
  font-size:15px;
`;

const Scroll = styled.ScrollView`
  flex:1;
`;

export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index} style={{ borderBottomColor: '#888888', borderBottomWidth: 1 }}>
              <ItemText>{item.task}</ItemText>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
}