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


const Screen = (props) => {
    console.log(props);
    return (
        <Page>
            <Titulo>Tela Inicial!</Titulo>
            <Titulo>{props.name}</Titulo>
        </Page>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.UserReducer.name,
        email: state.UserReducer.email
    };
}

const mapDispatchToProps = () => {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Screen);