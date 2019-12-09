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

const NavigateButton = styled.Button`

`;

export default (props) => {

    const about = () => {
        props.navigation.navigate('About');
    };

    return (
        <Page>
            <Titulo>Olá {props.navigation.state.params.nome}</Titulo>
            <NavigateButton title="SOBRE" onPress={about}></NavigateButton>
        </Page>
    );
}