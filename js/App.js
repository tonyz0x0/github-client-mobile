/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import('./debug/ReactotronConfig').then(() => console.log('Reactotron Configured'));
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigator/AppNavigators';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
      return <Provider store={store}>
          <AppNavigator/>
      </Provider>
  }
}
