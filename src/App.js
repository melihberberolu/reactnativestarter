import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'

import createStore from 'store/store';

import AppNavigation from './screens/AppNavigation';

const store = createStore();

type Props = {};
export default class App extends Component<Props> {
    render() {
        console.log(store);
        return (
            <Provider store={ store }>
                <AppNavigation />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
});
