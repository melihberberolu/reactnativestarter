import React from 'react';
import { StackNavigator, DrawerItems } from 'react-navigation'
import { View, Text } from 'react-native';

import Home from "screens/Home";
import Profile from "../screens/Profile";


const SideDrawerNavigation = StackNavigator({
    Home:{
        screen: Home
    },
    Profile:{
        screen: Profile
    },
},{
});

export default SideDrawerNavigation;
