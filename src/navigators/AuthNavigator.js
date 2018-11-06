import { createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SmsVerification from '../screens/SmsVerification';

const AuthNavigator = createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen: Register
    },
    SmsVerification:{
      screen: SmsVerification
    },
    Welcome:{
        screen:Welcome,
    }
}, {
    initialRouteName: 'Welcome',
    headerMode: 'none',
    header: null
});

export default AuthNavigator;
