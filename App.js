import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './src/reducers/Reducers';
import Home from './src/screens/HomeScreen';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navigator = createStackNavigator({
  "Home": {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>      
    );
  }
}