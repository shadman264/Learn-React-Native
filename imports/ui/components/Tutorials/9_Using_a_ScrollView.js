import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Layout_with_Flexbox extends Component {

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
                            9. Using a ScrollView 
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Using a ScrollView</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    The ScrollView is a generic scrolling container that can host multiple views and components. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>horizontal</Text> property).{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text, Image, ScrollView {'}'}{'\n                        '} from 'react-native';{'\n'}
                                        export default class ScrollViewTest extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <ScrollView>\n'}
                                        {'        <Text style={{fontSize:96}}>Scroll me plz</Text>\n'}                                      
                                        {'        <Image source={require('}'./img/favicon.png'{')} />\n'}
                                        {'        <Image source={require('}'./img/favicon.png'{')} />\n'}
                                        {'        <Text style={{fontSize:96}}>If you like</Text>\n'}
                                        {'      </ScrollView\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                        
                                        AppRegistry.registerComponent('AwesomeProject', () => ScrollViewTest);{'\n\n'}
                                    </Text>
                                    Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height.{'\n\n'}
                                    Another point to consider is <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>ScrollView</Text> renders all its react child components at once. This has a performance downside. Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.{'\n\n'}
                                    This is where <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> comes into play. <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> renders items lazily, just when they are about to appear, and removes items that scroll way off screen to save memory and processing time.
                                    A ScrollView with a single item can be used to allow the user to zoom content. Set up the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>maximumZoomScale</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>minimumZoomScale</Text> props and your user will be able to use pinch and expand gestures to zoom in and out.
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
                                    navigate('Using_a_ListView');
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

