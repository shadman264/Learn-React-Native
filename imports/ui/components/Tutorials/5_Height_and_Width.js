import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Height_and_Width extends Component {

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
                            5. Height and Width
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Height and Width</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    A component{'\''}s height and width determine its size on the screen.{'\n\n'}
                                    <Text style={{fontWeight:'bold'}}>Fixed Dimensions :</Text>{'\n\n'}
                                    The simplest way to set the dimensions of a component is by adding a fixed <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>width</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>height</Text> to style. All dimensions in React Native are unitless, and represent density-independent pixels.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry , View {'}'} from 'react-native';{'\n'}
                                        export default class FixedDimensionsBasics extends Component {'{\n'}                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'powderblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 100, height: 100, {'\n                  '}backgroundColor: 'skyblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 150, height: 150, {'\n                  '}backgroundColor: 'steelblue'{'}}>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);{'\n\n'}
                                    </Text>
                                    Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions.{'\n\n'}
                                    <Text style={{fontWeight:'bold'}}>Flex Dimensions :</Text>{'\n\n'}
                                    Use <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex</Text> in a component{'\''}s style to have the component expand and shrink dynamically based on available space. Normally you will use <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex: 1</Text>, which tells a component to fill all available space, shared evenly amongst each other component with the same parent. The larger the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex</Text> given, the higher the ratio of space a component will take compared to its siblings.{'\n\n'}
                                    A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>width</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>height</Text> or <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex</Text>, the parent will have dimensions of 0 and the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex</Text> children will not be visible.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry , View {'}'} from 'react-native';{'\n'}
                                        export default class FlexDimensionsBasics extends Component {'{\n'}                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style={{flex: 1}}>\n'}
                                        {'        <View style='}{'{{'}flex: 1, backgroundColor: {'\n                           '}'powderblue' {'}} />\n'}
                                        {'        <View style='}{'{{'}flex: 2, backgroundColor: {'\n                           '}'skyblue' {'}} />\n'}
                                        {'        <View style='}{'{{'}flex: 3, backgroundColor: {'\n                           '}'steelblue' {'}} />\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);{'\n\n'}
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
                                    navigate('Layout_with_Flexbox');
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

