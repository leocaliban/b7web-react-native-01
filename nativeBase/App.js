import React, { useState } from 'react';

import styled from 'styled-components/native';

import lista from './src/mocks/lista';

import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';

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
  const [items, setItem] = useState(lista);
  return (
    <Page>
      <AddItemArea
        items={items}
        setItem={setItem}
      ></AddItemArea>
      <Listagem
        data={items}
        renderItem={({ item }) => <ListaItem data={item}></ListaItem>}
        keyExtractor={(item) => item.id}
      >

      </Listagem>
    </Page>
  );
}