import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';

export default class LearnReactNative extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

    }

    render() {
        let color1 = 'white';
        let titleColor1 = '#29B6F6';
        if(this.props.color1!='unlocked'){
            //inactive
            color1 = 'rgba(128,151,153, 0.1)';
            titleColor1 = color1;
        }
        let color2 = 'white';
        let titleColor2 = '#29B6F6';
        if(this.props.color2!='unlocked'){
            //inactive
            color2 = 'rgba(128,151,153, 0.1)';
            titleColor2 = color2;
        }

        return (                

                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-start', marginRight:'1%'}}>
                        <Card style={{backgroundColor:color1, height: 180}}>
                            <Content scrollEnabled={ false }>
                                <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', paddingTop:'7%',paddingBottom: 65}}>
                                    <Thumbnail source={require('./../../../assets/images/reactLogo.png')} />
                                    <Text style={{paddingTop:'8%', color:'#0277BD', fontFamily: 'sans-serif-condensed'}}>React Native</Text> 
                                </View>
                                <View style={{backgroundColor:titleColor1, flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', paddingBottom: 30}}>
                                    <Text style={{paddingTop:'5%', color:'white'}}>{this.props.title1}</Text>
                                </View>
                            </Content>
                        </Card>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Card style={{backgroundColor:color2, height: 180}}>
                            <Content scrollEnabled={ false }>
                                <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', paddingTop:'7%',paddingBottom: 65}}>
                                    <Thumbnail source={require('./../../../assets/images/reactLogo.png')} />
                                    <Text style={{paddingTop:'8%', color:'#0277BD', fontFamily: 'sans-serif-condensed'}}>React Native</Text> 
                                </View>
                                <View style={{backgroundColor:titleColor2, flex: 5, flexDirection: "row", justifyContent: 'center', alignItems: 'stretch', paddingBottom: 30}}>
                                    <Text style={{paddingTop:'5%', color:'white'}}>{this.props.title2}</Text>
                                </View>
                            </Content>
                        </Card>
                    </View>
                </View>
            );
    }
}

