import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Anatomy extends Component {

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
                            13. Anatomy
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Anatomy</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    A common way to use NativeBase screen structure is to have all the components within <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Container>\n\n'}</Text>
                                    
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'import React, { Component } from \'react\';\n'}
                                        {'import { Container, Header, Content, Footer} \n                         from \'native-base\';\n'}
                                        {'export default class AnatomyExample extends Component {\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <Container>\n'}
                                        {'         <Header></Header>\n'}
                                        {'         <Content></Content>\n'}
                                        {'         <Footer></Footer>\n'}
                                        {'      </Container>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                    </Text>
                                        Container comes with its predefined stylesheet, with an added advantage of accepting user-defined styles. It takes mainly three components: <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Header>'}</Text> , <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Content>'}</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Footer>'}</Text> .{'\n\n'}

                                    <Text style={{fontWeight: 'bold'}}>Header Anatomy{'\n\n'}</Text>
                                    Usage of Container{'\''}s <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Header'}</Text> component is very similar to your HTML <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<head>'}</Text>. The header is divided into three parts. Components within <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Left>'}</Text> tag is displayed in the left side of the header, for <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Body>'}</Text> tag it is middle and for <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<Right>'}</Text> , it is right part of the header.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'<Header>\n'}
                                        {'   <Left></Left>\n'}
                                        {'   <Body></Body>\n'}
                                        {'   <Right></Right>\n'}
                                        {'</Header>\n\n'}
                                    </Text>

                                    <Text style={{fontWeight: 'bold'}}>Content Anatomy{'\n\n'}</Text>
                                    This is a NativeBase component which renders as body element of your screen. Each screen can have only one <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Content'}</Text> component and can be defined anywhere within the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Container'}</Text> . Content takes in the whole collection of React Native and NativeBase components. It replaces <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'ScrollView'}</Text> . {'\n\n'}

                                    <Text style={{fontWeight: 'bold'}}>Footer Anatomy{'\n\n'}</Text>
                                    Usage of Container{'\''}s <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Footer'}</Text> component is very similar to your HTML <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'<footer>'}</Text> . There can be only a single Footer component into your Container. To have <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Footer'}</Text> for your screen, include Footer component within <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'Container'}</Text> . Footer takes input as: <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'FooterTab'}</Text> . The components those are defined within Footer will be rendered in the same order that you define them.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'<Container>\n'}
                                        {'   <Header />\n'}
                                        {'   <Content />\n'}
                                        {'   <Footer>\n'}
                                        {'     <FooterTab>\n'}
                                        {'       <Button full>\n'}
                                        {'         <Text>Footer</Text>\n'}
                                        {'       </Button>\n'}
                                        {'     </FooterTab>\n'}
                                        {'   </Footer>\n'}
                                        {'</Container>\n\n'}
                                    </Text> 
                                    It replaces React Native <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>{'View'}</Text>

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
                                    navigate('ActionSheet');
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

