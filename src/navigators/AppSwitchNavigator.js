import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

import AuthController from "screens/AuthController";

const AppSwitchNavigator = createSwitchNavigator({
    AuthController: {
        screen: AuthController
    },
    Auth: AuthNavigator,
    MainNavigator: MainNavigator
});

export default AppSwitchNavigator;
