import React, { Component } from 'react';
import { Text } from 'react-native';

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

export default TextoComponent;
