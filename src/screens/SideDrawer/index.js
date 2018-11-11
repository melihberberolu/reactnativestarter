import React, { Component } from 'react';

import navigation from 'navigators/navigations'

class SideDrawer extends Component {

    state={
        screens:[
            {
                name: 'AccountSettings',
                labelId: 'screens.accountSettings',
                subScreens: [
                    {name: ''},
                    {},
                    {},
                ]
            },{
                name: 'AccountHistory',
                labelId: 'screens.accountSettings',
                subScreens: [
                    {name: ''},
                    {},
                    {},
                ]
            },{
                name: 'Financial',
                labelId: 'screens.accountSettings',
                subScreens: [
                    {name: ''},
                    {},
                    {},
                ]
            },{
                name: 'VirtualDevices',
                labelId: 'screens.accountSettings',
                subScreens: [
                    {name: ''},
                    {},
                    {},
                ]
            },{
                name: 'Support',
                labelId: 'screens.accountSettings',
                subScreens: [
                    {name: ''},
                    {},
                    {},
                ]
            },
        ]
    }


    render(){
        const { screens } = this.state;
        return(
            <View>
                {
                    screens.map(screen => {

                    })
                }
            </View>
        )
    }

}
