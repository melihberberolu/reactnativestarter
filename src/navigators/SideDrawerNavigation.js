import { DrawerNavigator } from 'react-navigation'

import Home from "../screens/Home";


const SideDrawerNavigation = DrawerNavigator({
    Home: createStackNavigator({
        HomeStack: {
            screen: Home,
            navigationOptions:{
                headerTitle: 'Home'
            }
        }
    }),

},{});

export default SideDrawerNavigation;
