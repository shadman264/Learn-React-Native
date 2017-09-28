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
import Layout_with_Flexbox from './imports/ui/components/Tutorials/6_Layout_with_Flexbox';
import Handling_Text_Input from './imports/ui/components/Tutorials/7_Handling_Text_Input';
import Handling_Touches from './imports/ui/components/Tutorials/8_Handling_Touches';
import Using_a_ScrollView from './imports/ui/components/Tutorials/9_Using_a_ScrollView';
import Using_a_ListView from './imports/ui/components/Tutorials/10_Using_a_ListView';
import Networking from './imports/ui/components/Tutorials/11_Networking';
import Intro_to_Native_Base from './imports/ui/components/Tutorials/12_Intro_to_Native_Base';

import Anatomy from './imports/ui/components/Tutorials/13_Anatomy';
import ActionSheet from './imports/ui/components/Tutorials/14_ActionSheet';
import Badge from './imports/ui/components/Tutorials/15_Badge';
import Buttons from './imports/ui/components/Tutorials/16_Buttons';
import Cards from './imports/ui/components/Tutorials/17_Cards';
import Deck_Swipper from './imports/ui/components/Tutorials/18_Deck_Swipper';
import FABs from './imports/ui/components/Tutorials/19_FABs';
import Footer_Tabs from './imports/ui/components/Tutorials/20_Footer_Tabs';
import Forms from './imports/ui/components/Tutorials/21_Forms';
import Header from './imports/ui/components/Tutorials/22_Header';
import Icon from './imports/ui/components/Tutorials/23_Icon';
import Layout from './imports/ui/components/Tutorials/24_Layout';
import List from './imports/ui/components/Tutorials/25_List';
import Picker from './imports/ui/components/Tutorials/26_Picker';
import Radio_Button from './imports/ui/components/Tutorials/27_Radio_Button';
import Search_Bar from './imports/ui/components/Tutorials/28_Search_Bar';
import Segment from './imports/ui/components/Tutorials/29_Segment';
import Spinner from './imports/ui/components/Tutorials/30_Spinner';
import Swipable_List from './imports/ui/components/Tutorials/31_Swipable_List';
import Tabs from './imports/ui/components/Tutorials/32_Tabs';
import Thumbnail from './imports/ui/components/Tutorials/33_Thumbnail';
import Toast from './imports/ui/components/Tutorials/34_Toast';
import Typography from './imports/ui/components/Tutorials/35_Typography';
import Navigation from './imports/ui/components/Tutorials/36_Navigation';
import Drawer from './imports/ui/components/Tutorials/37_Drawer';


const LearnReactNative = StackNavigator({
        Mainfeed: { screen: Mainfeed },
        Getting_Started: { screen: Getting_Started },
        Learn_the_Basics: { screen: Learn_the_Basics },
        Props: { screen: Props },
        State: { screen: State },
        Styling: { screen: Styling },
        Height_and_Width: { screen: Height_and_Width },
        Layout_with_Flexbox: { screen: Layout_with_Flexbox },
        Handling_Text_Input: { screen: Handling_Text_Input },
        Handling_Touches: { screen: Handling_Touches },
        Using_a_ScrollView: { screen: Using_a_ScrollView },
        Using_a_ListView: { screen: Using_a_ListView },
        Networking: { screen: Networking },
        Intro_to_Native_Base: { screen: Intro_to_Native_Base },
        Anatomy: { screen: Anatomy },
        ActionSheet: { screen: ActionSheet },
        Badge: { screen: Badge },
        Buttons: { screen: Buttons },
        Cards: { screen: Cards },
        Deck_Swipper: { screen: Deck_Swipper },
        FABs: { screen: FABs },
        Footer_Tabs: { screen: Footer_Tabs },
        Forms: { screen: Forms },
        Header: { screen: Header },
        Icon: { screen: Icon },
        Layout: { screen: Layout },
        List: { screen: List },
        Picker: { screen: Picker },
        Radio_Button: { screen: Radio_Button },
        Search_Bar: { screen: Search_Bar },
        Segment: { screen: Segment },
        Spinner: { screen: Spinner },
        Swipable_List: { screen: Swipable_List },
        Tabs: { screen: Tabs },
        Thumbnail: { screen: Thumbnail },
        Toast: { screen: Toast },
        Typography: { screen: Typography },
        Navigation: { screen: Navigation },
        Drawer: { screen: Drawer },
                
});

AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);
