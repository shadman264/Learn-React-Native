import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Handling_Text_Input extends Component {

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
                            7. Handling Text Input
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Handling Text Input</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>TextInput</Text> is a basic component that allows the user to enter text. It has an <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>onChangeText</Text> prop that takes a function to be called every time the text changed, and an <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>onSubmitEditing</Text> prop that takes a function to be called when the text is submitted.{'\n\n'}
                                    For example, let's say that as the user types, you're translating their words into a different language. In this new language, every single word is written the same way: <Text style={{fontFamily: 'monospace'}}>'bla'</Text>. So the sentence <Text style={{fontFamily: 'monospace'}}>"Hello there Bob"</Text> would be translated as <Text style={{fontFamily: 'monospace'}}>"bla bla bla"</Text>.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text, TextInput, View {'}'}{'\n                        '} from 'react-native';{'\n'}
                                        export default class BlaTranslator extends Component {'{\n'}
                                        {'  '}constructor(props) {'{\n'}
                                        {'    '}super(props);{'\n'}
                                        {'    '}this.state = {'{'}text: {'\'\'};\n'}
                                        {'  }\n\n'}
                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style={{padding: 10}}>\n'}
                                        {'        <TextInput\n'}
                                        {'          style={{height: 40}}\n'}
                                        {'          placeholder=\"Type here to translate!\"\n'}
                                        {'          onChangeText={(text) => this.setState({text})}\n'}
                                        {'        />\n'}    
                                        {'        <Text style={{padding: 10, fontSize: 42}}>\n'}
                                        {'          {this.state.text.split(\' \').map((word) => '}{'\n                          '}{'word && \'bla\').join(\' \')}\n'}
                                        {'        </Text>\n'}
                                        {'      </View\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                        
                                        AppRegistry.registerComponent('AwesomeProject', () => BlaTranslator);{'\n\n'}
                                    </Text>
                                    In this example, we store <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>text</Text> in the state, because it changes over time.{'\n\n'}
                                    There are a lot more things you might want to do with a text input. For example, you could validate the text inside while the user types. For more detailed examples, see the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react/docs/forms.html')}>React docs on controlled components</Text>, or the <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/textinput.html')}>reference docs for TextInput</Text>.
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
                                    navigate('Handling_Touches');
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

