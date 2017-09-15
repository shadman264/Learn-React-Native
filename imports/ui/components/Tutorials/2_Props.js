import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Props extends Component {

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
                            2. Props
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Props</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    Most components can be customized when they are created, with different parameters. These creation parameters are called <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>props</Text>.{'\n\n'}
                                    For example, one basic React Native component is the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Image</Text>. When you create an image, you can use a prop named <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>source</Text> to control what image it shows.{'\n\n'}
                                    Your own components can also use <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>props</Text>. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Just refer to <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>this.props</Text> in your <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>render</Text> function. Here's an example:{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text , View {'}'} from 'react-native';{'\n'}
                                        class Greeting extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <Text>'}Hello {'{'}this.props.name{'}'}!{'</Text>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        export default class LotsOfGreetings extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style='}{'{{'}alignItems: 'center'{'}}>\n'}
                                        {'        <Greeting name=>'}'Rexxar' {'/>\n'}
                                        {'        <Greeting name=>'}'Jaina' {'/>\n'}
                                        {'        <Greeting name=>'}'Valeera' {'/>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);{'\n\n'}
                                    </Text>
                                    Using <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>name</Text> as a prop lets us customize the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Greeting</Text> component, so we can reuse that component for each of our greetings. This example also uses the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Greeting</Text> component in JSX, just like the built-in components. The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you just invent new ones.{'\n\n'}
                                    The other new thing going on here is the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>View</Text> component. A <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>View</Text> is useful as a container for other components, to help control style and layout. With <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>props</Text> and the basic <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Text</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Image</Text>, and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>View</Text> components, you can build a wide variety of static screens.
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
                                    navigate('State');
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

