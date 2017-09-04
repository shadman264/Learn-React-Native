import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Learn_the_Basics extends Component {

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
                            1. Learn the Basics
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Learn the Basics</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    In accordance with the ancient traditions of our people, we must first build an app that does nothing except say "Hello world". Here it is:{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text {'}'} from 'react-native';{'\n'}
                                        export default class HelloWorldApp extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <Text>'}Hello world!{'</Text>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);{'\n\n'}
                                    </Text> 
                                    <Text>
                                        This code snippet has some unfamiliar aspects that may not look like javascript.{'\n\n'}
                                        <Text style={{fontWeight: 'bold'}}>ES6</Text>{'\n'}
                                        ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the official standard. React Native ships with ES2015 support. <Text style={{fontStyle: 'italic'}}>import, from, class, extends</Text> and the <Text style={{fontStyle: 'italic'}}>() => </Text> syntax in the example above are all ES2015 features. 
                                        <Text style={{color: 'blue',fontStyle: 'underline'}}
                                              onPress={() => Linking.openURL('https://babeljs.io/learn-es2015/')}>
                                        {' '}This page{' '}
                                        </Text>
                                        has a good overview of ES2015 features.{'\n\n'}

                                        <Text style={{fontWeight: 'bold'}}>JSX</Text>{'\n'}
                                        The other unusual thing in this code example is 
                                            <Text style={{fontStyle: 'italic'}}>
                                                {' <Text>Hello world!</Text> . '}
                                            </Text>
                                        This is JSX - a syntax for embedding XML within JavaScript. Many frameworks use a special templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like <Text style={{fontStyle: 'italic'}}>{'<div>'}</Text> or <Text style={{fontStyle: 'italic'}}>{'<span>'}</Text>, you use React components. In this case, <Text style={{fontStyle: 'italic'}}>{'<Text>'}</Text> is a built-in component that just displays some text.{'\n\n'}
                                    
                                        <Text style={{fontWeight: 'bold'}}>Components</Text>{'\n'}
                                        Every React Native app consists of various components. A component is a class that has a <Text style={{fontStyle: 'italic'}}>render</Text> function that returns some JSX to render. Everything a react native app displays is some sort of component.{'\n\n'}                            
                                    
                                        <Text style={{fontWeight: 'bold'}}>AppRegistry</Text>{'\n'}
                                            Every app is registered with single component via <Text style={{fontStyle: 'italic'}}>AppRegistry</Text>. It says which component is the root of the whole app.
                                        </Text>
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
                                    navigate('Props');
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

