import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Styling extends Component {

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
                            4. Styling
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Styling</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    With React Native, you don't use a special language or syntax for defining styles. You just style your application using JavaScript. All of the core components accept a prop named <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>style</Text>. The style names and <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react/docs/react-component.html')}>values</Text> usually match how CSS works on the web, except names are written using camel casing, e.g <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>backgroundColor</Text> rather than <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>background-color</Text>.{'\n\n'}
                                    The <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>style</Text> prop can be a plain old JavaScript object. That's the simplest and what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.{'\n\n'}
                                    As a component grows in complexity, it is often cleaner to use <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>StyleSheet.create</Text> to define several styles in one place. Here's an example:{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, StyleSheet, Text , View {'}'} from 'react-native';{'\n'}
                                        
                                        export default class LotsOfStyles extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style='}{'{{'}alignItems: 'center'{'}}>\n'}
                                        {'        <Text style={'}styles.red{'}>just red</Text>\n'}
                                        {'        <Text style={'}styles.bigblue{'}>just bigblue</Text>\n'}
                                        {'        <Text style={'}styles.bigblue, styles.red{'}\n                       >bigblue, then red</Text>\n'}
                                        {'        <Text style={'}styles.red, styles.bigblue{'}\n                       >red, then bigblue</Text>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}

                                        const styles = StyleSheet.create({'{\n'}
                                        {'  '}bigblue: {'{\n'}
                                        {'    '}color: 'blue',{'\n'}
                                        {'    '}fontWeight: 'bold',{'\n'}
                                        {'    '}fontSize: 30,{'\n'}
                                        {'  },\n'}
                                        {'  '}red: {'{\n'}
                                        {'    '}color: 'red',{'\n'}
                                        {'  },\n'}
                                        {'});\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);{'\n\n'}
                                    </Text>
                                    One common pattern is to make your component accept a <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>style</Text> prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.{'\n\n'}
                                    There are a lot more ways to customize text style. Check out the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/text.html')}>Text component reference</Text> for a complete list.
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
                                    navigate('Height_and_Width');
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

