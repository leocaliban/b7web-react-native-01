import React from 'react';
import styled from 'styled-components/native';

const TabBarIcon = styled.View`
    width:30px;
    height:30px;
    justify-content:center;
    align-items:center;
`;

const TabBarImg = styled.Image`
    width:24px;
    height:24px;
    margin-top:10px;
`;

const TabBarBadge = styled.View`
    width:15px;
    height:15px;
    border-radius:8px;
    background-color:#fff;
    position:absolute;
    justify-content:center;
    align-items:center;
    right:0;
    top:5;
    
`;

const TabBarBadgeCount = styled.Text`
    font-size:12px;
`;

export default (props) => {
    let img = null;

    switch (props.route) {
        case 'Home':
            img = (props.focused) ? require('../images/home-active.png') :
                require('../images/home.png');
            break;
        case 'Login':
            img = (props.focused) ? require('../images/login-active.png') :
                require('../images/login.png');
            break;
        default:
            break;
    }
    return (
        <TabBarIcon>
            <TabBarImg source={img}></TabBarImg>
            {props.badge > 0 &&
                <TabBarBadge>
                    <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
                </TabBarBadge>
            }

        </TabBarIcon>
    );
};