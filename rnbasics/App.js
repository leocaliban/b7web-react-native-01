import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import styled from 'styled-components/native';

// Criação de componente usando constante
const TextoComponent1 = () => {
  return (
    <Text>COMPONENT TEXTO WORKS!!!</Text>
  );
};

// Simplificada de 1 linha
const TextoComponent = () => <Text>COMPONENT TEXTO WORKS!!!</Text>;

function TextoComponent2() {
  return (
    <Text>COMPONENT TEXTO WORKS!!!</Text>
  );
}

// Criação de componente usando classes (não recomendado)
class TextoComponent3 extends Component {
  render() {
    return (
      <Text> COMPONENT TEXTO WORKS!!!</Text >
    );
  }
}

const ComponenteComEstilos = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Estilização de componente com StyleSheet (class)</Text>
      <Text style={{ color: '#fff896', fontSize: 30, textAlign: 'center' }}>Estilo inline</Text>
      <Text style={[styles.text, styles.erro]}>Erro!!!</Text>
    </View>
  );
};

// SafeAreaView para enquadrar o item na tela dos dispositivos IOS
const ComponenteSafeAreaView = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.text}>Estilização de componente com StyleSheet</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: 300,
    backgroundColor: '#478888',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 50
  },
  erro: {
    color: '#ff8c80'
  }
});

// Criação do componente Content
const Content = styled.SafeAreaView`
  flex:1
  background-color:black;
`;

// Criação do componente Label com StyledComponent
const Label = styled.Text`
  color:#ff0000;
  font-size:30px;
`;

const Nome = styled.Text`
  color:${props => props.cor};
  font-size:30px;
`;

const ComponenteStyled = () => {
  return (
    <Content>
      <Label>Estilização de componente com StyledComponent</Label>
      <Nome cor="white">Passando Propriedade personalizada</Nome>
      <Nome cor="blue">Erro!!!</Nome>
    </Content>
  );
};

export default ComponenteStyled;
