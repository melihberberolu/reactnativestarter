import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import SideDrawerNavigation from './SideDraweNavigation';

const MainNavigator = createStackNavigator({
    SideDrawer:{
        screen: SideDrawerNavigation,
        navigationOptions: {
            header: null
        }
    },
    Tab: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    }
}, {
    headerMode: 'none',
    header: null
});

export default MainNavigator;
