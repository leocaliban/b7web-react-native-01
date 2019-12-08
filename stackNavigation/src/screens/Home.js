import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items: center;
    padding: 0 20px;
`;

const Titulo = styled.Text`
    font-size:20px;
    font-weight:bold;
`;

const SubTitulo = styled.Text`
    font-size:16px;
`;

const NavigateButton = styled.Button`

`;

const Input = styled.TextInput`
    border: 1px solid #000;
    width:100%;
    border-radius:10px;
    padding: 5px 20px;
    margin: 20px;
`;


const HomePage = (props) => {

    const [nome, setNome] = useState('');

    const login = () => {
        props.navigation.navigate('Login', { nome });
    };

    return (
        <Page>
            <Titulo>Bem Vindo!</Titulo>
            <SubTitulo>Digite seu nome para fazer Login.</SubTitulo>
            <Input value={nome} onChangeText={setNome}></Input>
            <NavigateButton title="Fazer Login" onPress={login}></NavigateButton>
        </Page>
    );
}

HomePage.navigationOptions = () => {
    return {
        title: 'Identificação'
    }
}

export default HomePage;