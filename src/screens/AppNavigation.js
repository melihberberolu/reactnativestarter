import React, { Component, createRef, Fragment } from 'react';
import AppNavigator from '../navigators/AppSwitchNavigator';
import navigation from '../navigators/navigations';

class AppNavigation extends Component{

    render(){

        return(
            <Fragment>
                <AppNavigator ref={ navigatorRef => navigation.setNavigator(navigatorRef) }/>
            </Fragment>
        )
    }
}

export default AppNavigation;
