import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Mainfeed from './imports/ui/components/Mainfeed/mainfeed';
import Getting_Started from './imports/ui/components/Tutorials/0_Getting_Started';
import Learn_the_Basics from './imports/ui/components/Tutorials/1_Learn_the_Basics';
import Props from './imports/ui/components/Tutorials/2_Props';
import State from './imports/ui/components/Tutorials/3_State';
import Styling from './imports/ui/components/Tutorials/4_Styling';
import Height_and_Width from './imports/ui/components/Tutorials/5_Height_and_Width';
import Flexbox from './imports/ui/components/Tutorials/6_Flexbox';
import ListView from './imports/ui/components/Tutorials/7_ListView';
import Layout_with_Flexbox from './imports/ui/components/Tutorials/8_Layout_with_Flexbox';
import Handling_Text_Input from './imports/ui/components/Tutorials/9_Handling_Text_Input';
import Handling_Touches from './imports/ui/components/Tutorials/10_Handling_Touches';

const LearnReactNative = StackNavigator({
        Mainfeed: { screen: Mainfeed },
        Getting_Started: { screen: Getting_Started },
        Learn_the_Basics: { screen: Learn_the_Basics },
        Props: { screen: Props },
        State: { screen: State },
        Styling: { screen: Styling },
        Height_and_Width: { screen: Height_and_Width },
        Flexbox: { screen: Flexbox },
        ListView: { screen: ListView },
        Layout_with_Flexbox: { screen: Layout_with_Flexbox },
        Handling_Text_Input: { screen: Handling_Text_Input },
        Handling_Touches: { screen: Handling_Touches },
});

AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);
