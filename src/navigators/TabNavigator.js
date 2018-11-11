import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from "../screens/Home";
import Profile from "../screens/Profile";


const TabNavigator = createBottomTabNavigator({
    HomeStack: createStackNavigator({
        Home: {
            screen: Home
        }
    }),
    ProfileStack: createStackNavigator({
        Profile:{
            screen: Profile
        }
    }),
}, {

});

export default TabNavigator;
