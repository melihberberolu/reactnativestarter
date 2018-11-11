import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from "../screens/Home";
import Profile from "../screens/Profile";


const BottomTabNavigator = createBottomTabNavigator({
    Home: createStackNavigator({
            Home: {
                screen: Home
            }
        }),
    Profile: createStackNavigator({
        Profile: {
            screen: Profile
        }
    })
}, {

});

export default createStackNavigator({ BottomTabNavigator },{ headerMode: 'none' });
