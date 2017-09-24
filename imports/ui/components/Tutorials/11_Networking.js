import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Networking extends Component {

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
                            11. Networking
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Networking</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may simply need to fetch a chunk of static content from another server.{'\n\n'}
                                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Using Fetch{'\n\n'}</Text>
                                    React Native provides the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://developer.mozilla.org/en-US/docs/Web/API/Fetch_API')}>Fetch API</Text> for your networking needs. Fetch will seem familiar if you have used XMLHttpRequest or other networking APIs before.{'\n\n'}
                                    
                                    <Text style={{fontWeight: 'bold'}}>Making requests{'\n\n'}</Text>
                                    In order to fetch content from an arbitrary URL, just pass the URL to fetch. Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request. Take a look at the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://developer.mozilla.org/en-US/docs/Web/API/Request')}>Fetch Request docs</Text> for a full list of properties.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'fetch('}'https://mywebsite.com/endpoint/'{'\n'}
                                        {'  method:'}'POST'{',\n'}
                                        {'  headers: {\n'}
                                        {'    '}'Accept': 'application/json',{'\n'}
                                        {'    '}'Content-Type': 'application/json',{'\n'}
                                        {'  },\n'}
                                        {'  body: JSON.stringify({\n'}
                                        {'    '}firstParam: 'yourValue',{'\n'}
                                        {'    '}secondParam: 'yourOtherValue',{'\n'}
                                        {'  })\n'}
                                        {'})\n\n'}
                                    </Text>

                                    <Text style={{fontWeight: 'bold'}}>Making requests{'\n\n'}</Text>
                                    The above examples show how you can make a request. In many cases, you will want to do something with the response. Networking is an inherently asynchronous operation. Fetch methods will return a Promise that makes it straightforward to write code that works in an asynchronous manner. You can also use the proposed ES2017 async/await syntax in a React Native app. Don{'\''}t forget to catch any errors that may be thrown by fetch, otherwise they will be dropped silently.{'\n\n'}

                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'async function getMoviesFromApi() {'}{'\n'}
                                        {'  try {\n'}
                                        {'    let response = await fetch(\'https://facebook.github.io/react-native/movies.json\');\n'}
                                        {'    let responseJson = await response.json();\n'}
                                        {'    return responseJson.movies;\n'}
                                        {'  } catch(error) {\n'}
                                        {'    console.error(error);\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                    </Text>

                                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Using Other Networking Libraries{'\n\n'}</Text>
                                    The <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest')}>XMLHttpRequest</Text> API is built in to React Native. This means that you can use third party libraries such as frisbee or axios that depend on it, or you can use the XMLHttpRequest API directly if you prefer.{'\n\n'}

                                    <Text style={{fontWeight: 'bold', fontSize: 20}}>WebSocket Support{'\n\n'}</Text>
                                    React Native also supports <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://developer.mozilla.org/en-US/docs/Web/API/WebSocket')}>WebSockets</Text>, a protocol which provides full-duplex communication channels over a single TCP connection.{'\n\n'}
                                    
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'var ws = new WebSocket(\'ws://host.com/path\');\n\n'}
                                        
                                        {'ws.onopen = () => {\n'}
                                        {'  '}<Text style={{color: 'grey', fontFamily: 'monospace', fontSize: 10}}>// connection opened</Text>{'\n'}
                                        {'  ws.send(\'something\');  '}<Text style={{color: 'grey', fontFamily: 'monospace', fontSize: 10}}>// send a message</Text>{'\n'}
                                        {'};\n\n'}
                                        
                                        {'ws.onmessage = (e) => {\n'}
                                        {'  '}<Text style={{color: 'grey', fontFamily: 'monospace', fontSize: 10}}>// a message was received</Text>{'\n'}
                                        {'  console.log(e.data);\n'}
                                        {'};\n\n'}
                                        
                                        {'ws.onerror = (e) => {\n'}
                                        {'  '}<Text style={{color: 'grey', fontFamily: 'monospace', fontSize: 10}}>// an error occurred</Text>{'\n'}
                                        {'  console.log(e.message);\n'}
                                        {'};\n\n'}
                                        
                                        
                                        {'ws.onclose = (e) => {\n'}
                                        {'  '}<Text style={{color: 'grey', fontFamily: 'monospace', fontSize: 10}}>// connection closed</Text>{'\n'}
                                        {'  console.log(e.code, e.reason);\n'}
                                        {'};\n\n'}
                                        
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
                                    // click.play();
                                    // navigate('Layout_with_Flexbox');
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

