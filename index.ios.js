//Place code for IOS.

//Import a library to help create a component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'

//Create a component.
const App = () => (
  </ Header>
  <Text>Some Text</Text>
);

// Render it to the device.
AppRegistry.registerComponent('albums', () => App);
