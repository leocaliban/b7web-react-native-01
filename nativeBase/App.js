import React, { useState } from 'react';

import styled from 'styled-components/native';

import lista from './src/mocks/lista';

import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import ListaItemSwipe from './src/components/ListaItemSwipe';

import { SwipeListView } from 'react-native-swipe-list-view';

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

  const addNewItem = (inputText) => {
    let newItems = [...items];
    newItems.push({
      id: inputText,
      task: inputText,
      done: false
    });
    setItem(newItems);
  };

  const toggleRadio = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItem(newItems);
  };

  const deleteItem = (index) => {
    let newItems = [...items];
    newItems = newItems.filter((elemento, posicao) => posicao !== index);
    setItem(newItems);
  };

  return (
    <Page>
      <AddItemArea onAddItem={addNewItem}
      ></AddItemArea>
      <SwipeListView
        data={items}
        renderItem={({ item, index }) =>
          <ListaItem
            data={item}
            onPress={() => toggleRadio(index)}
          ></ListaItem>
        }
        keyExtractor={(item) => item.id}
        leftOpenValue={50}
        disableLeftSwipe={true}
        renderHiddenItem={({ item, index }) =>
          <ListaItemSwipe onDelete={() => deleteItem(index)}></ListaItemSwipe>
        }
      >

      </SwipeListView>
    </Page>
  );
}