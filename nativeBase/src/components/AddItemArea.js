import React, { useState } from 'react';

import styled from 'styled-components/native';

const AddItemArea = styled.View`
    background-color:#000dff;
    padding:10px;
`;

const AddItemInput = styled.TextInput`
    background-color:#fff;
    font-size:15px;
    height:40px;
    border-radius:5px;
    padding:0 10px;
`;
export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
        item.trim();
        if (item !== '') {
            props.onAddItem(item);
            setItem('');
        }
    };
    return (
        <AddItemArea>
            <AddItemInput
                placeholder="Novo item"
                value={item}
                onChangeText={setItem}
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
            ></AddItemInput>
        </AddItemArea>
    );
}