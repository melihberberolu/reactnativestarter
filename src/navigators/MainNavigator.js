import React from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator, createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import SideDrawerNavigation from "./SideDrawerNavigation";

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    SideDrawer: {
        screen: SideDrawerNavigation
    }
    }, {
    initialRoute: 'Home',
    headerMode: 'none',
    header: null
});

export default MainNavigator;
