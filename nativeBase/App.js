import React from 'react';

import styled from 'styled-components/native';

import lista from './src/mocks/lista';

import ListaItem from './src/components/ListaItem';

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

const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {
  return (
    <Page>
      <Listagem
        data={lista}
        renderItem={({ item }) => <ListaItem data={item}></ListaItem>}
        keyExtractor={(item) => item.id}
      >

      </Listagem>
    </Page>
  );
}