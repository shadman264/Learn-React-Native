import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class Flexbox extends Component {

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
                            6. Layout with Flexbox 
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>Layout with Flexbox</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    A component can specify the layout of its children using the flexbox algorithm. Flexbox is designed to provide a consistent layout on different screen sizes.{'\n\n'}  
                                    You will normally use a combination of <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flexDirection</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>alignItems</Text>, and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>justifyContent</Text> to achieve the right layout.{'\n\n'}
                                    Flexbox works the same way in React Native as it does in <Text style={{fontWeight: 'bold'}}>CSS</Text> on the web, with a few exceptions. The defaults are different, with <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flexDirection</Text> defaulting to <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>column</Text> instead of <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>row</Text>, and the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex</Text> parameter only supporting a single number.  {'\n\n'}                          
                                    <Text style={{fontWeight: 'bold'}}>Flex Direction</Text>{'\n\n'}
                                    Adding <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flexDirection</Text> to a component{'\''}s <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>style</Text> determines the <Text style={{fontWeight: 'bold'}}>primary axis</Text> of its layout. Should the children be organized horizontally <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>(row)</Text> or vertically <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>(column)</Text>? The default is <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>column</Text>.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry , View {'}'} from 'react-native';{'\n'}
                                        export default class FlexDirBasics extends Component {'{\n'}                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style={{flex: 1, flexDirection: '}'row'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'powderblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'skyblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'steelblue'{'}}>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => FlexDirBasics);{'\n\n'}
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>Justify Content</Text>{'\n\n'}
                                    Adding <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>justifyContent</Text> to a component{'\''}s style determines the <Text style={{fontWeight: 'bold'}}>distribution</Text> of children along the <Text style={{fontWeight: 'bold'}}>primary axis</Text>. Should children be distributed at the start, the center, the end, or spaced evenly? Available options are <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex-start</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>center</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex-end</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>space-around</Text>, and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>space-between</Text>.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry , View {'}'} from 'react-native';{'\n'}
                                        export default class JustifyContBasics extends Component {'{\n'}                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style={{flex: 1, \n                    flexDirection: '}'row', {'\n                    '}justifyContent: 'space-between', {'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'powderblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'skyblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'steelblue'{'}}>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => FlexDirBasics);{'\n\n'}
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>Align Items</Text>{'\n\n'}
                                    Adding <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>alignItems</Text> to a component{'\''}s style determines the <Text style={{fontWeight: 'bold'}}>alignment</Text> of children along the <Text style={{fontWeight: 'bold'}}>secondary axis</Text> (if the primary axis is <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>row</Text>, then the secondary is <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>column</Text>, and vice versa). Should children be aligned at the start, the center, the end, or stretched to fill? Available options are <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex-start</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>center</Text>, <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>flex-end</Text>, and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>stretch</Text>.{'\n\n'}
                                    For <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>stretch</Text> to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>alignItems: stretch</Text> does nothing until the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>width: 50</Text> is removed from the children.{'\n\n'}
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry , View {'}'} from 'react-native';{'\n'}
                                        export default class AlignItemsBasics extends Component {'{\n'}                                        
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View style={{flex: 1, \n                    flexDirection: '}'row', {'\n                    '}justifyContent: 'space-between', {'\n                    '}alignItems: 'center',{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'powderblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'skyblue'{'}}>\n'}
                                        {'        <View style='}{'{{'}width: 50, height: 50, {'\n                  '}backgroundColor: 'steelblue'{'}}>\n'}
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                                        AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);{'\n\n'}
                                    </Text>
                                    We{'\''}ve covered the basics, but there are many other styles you may need for layouts. The full list of props that control layout is documented <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://facebook.github.io/react-native/docs/layout-props.html')}>here</Text>.
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
                                    navigate('Handling_Text_Input');
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

