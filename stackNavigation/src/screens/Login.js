import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items: center;
`;

const Titulo = styled.Text`
    font-size:20px;
`;


export default (props) => {
    return (
        <Page>
            <Titulo>Olá {props.navigation.state.params.nome}</Titulo>

        </Page>
    );
}