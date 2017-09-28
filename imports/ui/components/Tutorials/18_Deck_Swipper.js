import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Deck_Swipper extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

    }
    

    render() {
        const { navigate } = this.props.navigation;
        let click = new Sound('click2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error)
                return;
        });
        return (                
            <Container>
                <Header androidStatusBarColor='#039BE5' style={{backgroundColor:'#29B6F6'}} >
                    <Button transparent><Icon name='arrow-back' /></Button>
                    <Body>
                        <Title style={{paddingLeft: '7%'}}>
                            18. Deck Swipper
                        </Title>
                    </Body>
                </Header>
                <Content style={{padding: '2%', marginBottom: '2%', paddingBottom: '50%'}}>
                    <Card style={{backgroundColor: 'white'}}>
                        <Content scrollEnabled={ false }>
                            <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', paddingTop:'4%'}}>
                                <Thumbnail source={require('./../../../assets/images/reactLogo.png')} />
                                <Text style={{paddingTop:'4%', color:'#0277BD', fontFamily: 'sans-serif-condensed'}}>React Native</Text> 
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', paddingBottom: 20}}>
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Deck Swipper</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.{'\n\n'}
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>System Requirements{'\n'}</Text>
                                    <Text>{'\u2022  '}Globally installed node >= 6.0{'\n'}</Text>
                                    <Text>{'\u2022  '}Globally installed npm >= 4.0{'\n'}</Text>
                                    <Text>{'\u2022  '}Globally installed React Native CLI which allow you to easily create and initialize projects.{'\n\n'}</Text>
                                    
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Install NativeBase{'\n'}</Text>
                                    To have NativeBase components running onto your native apps, all you need to do is, create a fresh React Native project and install the NativeBase using npm.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>npm install native-base --save{'\n\n'}</Text>

                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Install Peer Dependencies{'\n'}</Text>
                                    The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>react-native link{'\n\n'}</Text>
                                    You{'\''}ve successfully setup NativeBase with your React Native app. Your React Native app is ready to run on iOS and Android devices.
                                </Text>

                            </View>
                        </Content>
                    </Card> 
                    <View style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '7%', paddingTop:'2%'}}>
                        <View style={{flex: 1, flexDirection: "row", justifyContent: 'flex-start', alignItems: 'flex-end', paddingBottom: '7%', paddingTop:'2%'}}>
                            <Button primary style={{borderRadius: 8}}  onPress={() => {
                                    click.play();
                                    navigate('Mainfeed');
                                }
                            }>
                                <Text>Main feed</Text>
                            </Button>
                        </View>
                        <View style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '7%', paddingTop:'2%'}}>
                            <Button success style={{borderRadius: 8}}  onPress={() => {
                                    click.play();
                                    navigate('FABs');
                                }
                            }>
                                <Text>Next</Text>
                            </Button>
                        </View> 
                    </View>                   
                </Content>               
            </Container>       
        );
    }
}

