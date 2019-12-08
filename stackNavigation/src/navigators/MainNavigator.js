import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },

});

export default MainNavigator; 