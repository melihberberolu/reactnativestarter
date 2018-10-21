import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import AppNavigation from './screens/AppNavigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
});
