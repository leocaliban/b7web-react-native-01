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
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Título Padrão',
        headerStyle: {
            backgroundColor: '#70ff83'
        },
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTintColor: '#333',
        headerRightContainerStyle: {
            marginRight: 20
        }
    }
});

export default MainNavigator; 