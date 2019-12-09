import React from 'react';
import styled from 'styled-components/native';

import TabBarIcon from '../components/TabBarIcon';

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

const Login = (props) => {

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

Login.navigationOptions = () => {

    return {
        tabBarLabel: 'Login',
        tabBarIcon: ({ focused }) => {
            return (
                <TabBarIcon
                    focused={focused}
                    route="Login"
                    badge={1}
                ></TabBarIcon>
            )
        }
    }
}

export default Login;