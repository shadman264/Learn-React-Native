import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Handling_Touches extends Component {

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
                            8. Handling Touches 
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Handling Touches</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Handling Touches</Text>{'\n\n'}
                                    Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures. One component you will most likely be interested in is the basic Button.{'\n\n'}
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Displaying a basic button</Text>{'\n\n'}
                                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/button.html')}>Button</Text> provides a basic button component that is rendered nicely on all platforms. The minimal example to display a button looks like this:{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'<Button\n'}
                                        {'  onPress={() => { Alert.alert('}'You tapped the button!'{')}}\n'}
                                        {'  title='}"Press Me"{'\n'}
                                        />{'\n\n'}
                                    </Text>
                                    This will render a blue label on iOS, and a blue rounded rectangle with white text on Android. Pressing the button will call the "onPress" function, which in this case displays an alert popup. If you like, you can specify a "color" prop to change the color of your button.{'\n\n'}
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Touchables</Text>{'\n\n'}
                                    If the basic button doesn{'\''}t look right for your app, you can build your own button using any of the "Touchable" components provided by React Native. The "Touchable" components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized. These components do not provide any default styling.{'\n\n'}
                                    Which "Touchable" component you use will depend on what kind of feedback you want to provide:{'\n\n'}
                                    <Text>{'\u2022  '}Generally, you can use <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/touchablehighlight.html')}>TouchableHighlight</Text> anywhere you would use a button or link on web. The view{'\''}s background will be darkened when the user presses down on the button.{'\n\n'}</Text>
                                    <Text>{'\u2022  '}You may consider using <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/touchablenativefeedback.html')}>TouchableNativeFeedback</Text> on Android to display ink surface reaction ripples that respond to the user{'\''}s touch.{'\n\n'}</Text>
                                    <Text>{'\u2022  '}<Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/touchableopacity.html')}>TouchableOpacity</Text> can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.{'\n\n'}</Text>
                                    <Text>{'\u2022  '}If you need to handle a tap gesture but you don{'\''}t want any feedback to be displayed, use <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/touchablewithoutfeedback.html')}>TouchableWithoutFeedback</Text>.{'\n\n'}</Text>
                                    In some cases, you may want to detect when a user presses and holds a view for a set amount of time. These long presses can be handled by passing a function to the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>onLongPress</Text> props of any of the "Touchable" components.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'<TouchableHighlight onPress={this._onPressButton} \n            onLongPress={this._onLongPressButton} \n                           underlayColor='}"white"{'>\n'}
                                        {'   <View style={styles.button}>'}{'\n'}
                                        {'       <Text style={styles.buttonText}>\n          TouchableHighlight\n      </Text>'}{'\n'}
                                        {'   </View>'}{'\n'}
                                        {'</TouchableHighlight>\n\n'}

                                        {'_onPressButton() {\n'}
                                        {'  Alert.alert('}'You tapped the button!'{')\n'}
                                        {'}\n\n'}

                                        {'_onLongPressButton() {\n'}
                                        {'  Alert.alert('}'You long tapped the button!'{')\n'}
                                        {'}\n\n'}
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
                                    navigate('Using_a_ScrollView');
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

