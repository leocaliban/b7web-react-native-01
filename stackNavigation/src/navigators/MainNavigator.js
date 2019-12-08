import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import About from '../screens/About';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: {
        screen: Login, navigationOptions: {
            title: 'Login'
        }
    },
    About: { screen: About },
}, {
    defaultNavigationOptions: {
        title: 'Título Padrão'
    }
});

export default MainNavigator; 