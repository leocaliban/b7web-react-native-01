import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Login from '../screens/Login';
import About from '../screens/About';

const MainNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    Login: {
        screen: Login, navigationOptions: {
            title: 'Login'
        }
    },
    About: { screen: About },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#ff59ff',
        activeBackgroundColor: '#000',
        inactiveTintColor: '#000',
        inactiveBackgroundColor: '#ff59ff'
    },
    defaultNavigationOptions: {
        title: 'Título Padrão',
    }
});

export default MainNavigator; 