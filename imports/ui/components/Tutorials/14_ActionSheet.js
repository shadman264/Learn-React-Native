import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class ActionSheet extends Component {

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
                            14. ActionSheet
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>ActionSheet</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    NativeBase ActionSheet is a wrapper around the React Native <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/releases/0.44/docs/actionsheetios.html')}>ActionSheetIOS</Text> component. {'\n\n'}
                                    <Text style={{fontStyle: 'italic'}}>General Syntax{'\n\n'}</Text>

                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        {'import React, { Component } from \'react\';\n'}
                                        {'import { Container, Header, Button, Content, ActionSheet,\n                              Text} from \'native-base\';\n'}
                                        {'var BUTTONS = ["Option 0", "Option 1", "Option 2", \n              "Delete", "Cancel"];\n'}
                                        {'var DESTRUCTIVE_INDEX = 3;\n'}
                                        {'var CANCEL_INDEX = 4;\n'}
                                        {'export default class ActionSheetExm extends Component {\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <Container>\n'}
                                        {'         <Header />\n'}
                                        {'         <Content padder>\n'}
                                        {'           <Button\n'}
                                        {'             onPress={() =>\n'}
                                        {'             ActionSheet.show(\n'}
                                        {'               {\n'}
                                        {'                 options: BUTTONS,\n'}
                                        {'                 cancelButtonIndex: CANCEL_INDEX,\n'}
                                        {'                 destructiveButtonIndex:\n                        DESTRUCTIVE_INDEX,\n'}
                                        {'                 title: "Testing ActionSheet"\n'}
                                        {'               },\n'}
                                        {'               buttonIndex => {\n'}
                                        {'                 this.setState({ clicked: \n                      BUTTONS[buttonIndex] });\n'}
                                        {'               },\n'}
                                        {'             )}\n'}
                                        {'           >\n'}
                                        {'             <Text>Actionsheet</Text>\n'}
                                        {'           </Button>\n'}
                                        {'         </Content>\n'}
                                        {'      </Container>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
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
                                    navigate('Badge');
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

