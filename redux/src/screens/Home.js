import React from 'react';
import styled from 'styled-components/native';

import { connect } from 'react-redux';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items: center;
`;

const Titulo = styled.Text`
    font-size:20px;
`;

const Input = styled.TextInput`
    font-size:15px;
    border:1px solid #000;
    margin:20px;
    height:40px;
    width:90%;
    border-radius:10px;
`;


const Screen = (props) => {
    return (
        <Page>
            <Titulo>Tela Inicial!</Titulo>
            <Titulo>{props.name}</Titulo>

            <Input value={props.name} onChangeText={e => props.setName(e)}></Input>
        </Page>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.UserReducer.name,
        email: state.UserReducer.email
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Screen);