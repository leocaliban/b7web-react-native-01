import React, { useState } from 'react';

import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
    background-color:#737a9e;
    width:100%;
    height:60px;
    justify-content:center;
`;

const ListaItemIcon = styled.View`
    width:10px;
    height:10px;
    background-color:#fff;
    margin-left: 20px;
`;

export default (props) => {

    return (
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#50556e">
            <ListaItemIcon></ListaItemIcon>
        </ListaItemSwipe>
    );
}