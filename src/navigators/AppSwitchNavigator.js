import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppSwitchNavigator = createSwitchNavigator({
   Auth: AuthNavigator,
});

export default AppSwitchNavigator;