import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Mainfeed from './imports/ui/components/Mainfeed/mainfeed';

const LearnReactNative = StackNavigator({
        Mainfeed: { screen: Mainfeed },
});

AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);
