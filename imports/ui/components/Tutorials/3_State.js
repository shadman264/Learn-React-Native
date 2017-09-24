import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class State extends Component {

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
                            3. State
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>State</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    There are two types of data that control a component: <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>props</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>state</Text>. <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>props</Text> are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>state</Text>.{'\n\n'}
                                    In general, you should initialize <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>state</Text> in the constructor, and then call <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>setState</Text> when you want to change it.{'\n\n'}
                                    For example, let{'\''}s say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>prop</Text>. The "whether the text is currently on or off" changes over time, so that should be kept in <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>state</Text>.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text , View {'}'} from 'react-native';{'\n'}
                                        class Blink extends Component {'{\n'}
                                        {'  '}constructor(props) {'{\n'}
                                        {'    '}super(props);{'\n'}
                                        {'    '}this.state = {'{'}showText: true{'};'}{'\n\n'}
                                        {'    '}<Text style={{fontFamily: 'monospace', fontSize: 10, color:'grey'}}>// Toggle the state every second </Text> {'\n'}
                                        {'    '}setInterval(() => {'{\n'}
                                        {'      '}this.setState(previousState => {'{\n'}
                                        {'        '}return {'{ showText: !previousState.showText };'}{'\n'}
                                        {'      '}{'});\n'}
                                        {'    '}{'}, 1000);\n'}
                                        {'  }\n\n'}
                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}let display = this.state.showText?this.props.text:' ';{'\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <Text>{display}'}{'</Text>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        export default class BlinkApp extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style='}{'{{'}alignItems: 'center'{'}}>\n'}
                                        {'        <Blink text=>'}'I love to blink' {'/>\n'}
                                        {'        <Blink text=>'}'Yes blinking is so great' {'/>\n'}
                                        {'        <Blink text=>'}'Look at me look at me look at me' {'/>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);{'\n\n'}
                                    </Text>
                                    In a real application, you probably won{'\''}t be setting state with a timer. You might set state when you have new data arrive from the server, or from user input. You can also use a state container like <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://redux.js.org/index.html')}>Redux</Text> to control your data flow. In that case you would use Redux to modify your state rather than calling <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>setState</Text> directly.{'\n\n'}
                                    When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks.{'\n\n'}
                                    State works the same way as it does in React, so for more details on handling state, you can look at the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react/docs/react-component.html')}>React.Component API</Text>.
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
                                    navigate('Styling');
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

