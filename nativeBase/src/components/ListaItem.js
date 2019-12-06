import React from 'react';

import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color:#bfcbff;
  flex-direction:row;
`;

const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;

const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:1px;
  border:5px solid ${props => props.checked ? '#000dff' : '#fff'};
  background-color:${props => props.checked ? '#000dff' : '#fff'};
`;

export default (props) => {
  return (
    <Item
      activeOpacity={0.7}
      style={{ borderBottomColor: '#888888', borderBottomWidth: 1 }}
      onPress={props.onPress}
    >
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck checked={props.data.done}></ItemCheck>
      </>
    </Item>
  )
}
