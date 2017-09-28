import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail, Left, Content } from 'native-base';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

export default class ListView extends Component {

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
                            10. Using a ListView
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
                                <Text style={{paddingTop:'0%', color:'#0288D1', fontWeight: 'bold', fontSize: 24}}>ListView</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'stretch', padding: '5%', paddingBottom: 20}}>
                                <Text>
                                    React Native provides a suite of components for presenting lists of data. Generally, you{'\''}ll want to use either FlatList or SectionList.{'\n\n'}
                                    <Text style={{fontWeight: 'bold'}}>FlatList{'\n\n'}</Text>
                                    The <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> component displays a scrolling list of changing, but similarly structured, data. <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> works well for long lists of data, where the number of items might change over time. Unlike the more generic <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>ScrollView</Text>, the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> only renders elements that are currently showing on the screen, not all the elements at once.{'\n\n'}
                                    The <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> component requires two props: <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>data</Text> and <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>renderItem</Text>. <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>data</Text> is the source of information for the list. <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>renderItem</Text> takes one item from the source and returns a formatted component to render.{'\n\n'}
                                    This example creates a simple <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> of hardcoded data. Each item in the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>data</Text> props is rendered as a <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Text</Text> component. The <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatListBasics</Text> component then renders the <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>FlatList</Text> and all <Text style={{backgroundColor:'#e8e6e4', fontFamily: 'monospace'}}>Text</Text> components.{'\n\n'}
                                    
                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text, FlatList, View {'}'}{'\n                        '} from 'react-native';{'\n'}
                                        export default class FlatListBasics extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View>\n'}
                                        {'         <FlatList\n'}   
                                        {'           data={[\n'}
                                        {'             {key: \''}Devin{'\',\n'}
                                        {'             {key: \''}Jackson{'\',\n'}
                                        {'             {key: \''}James{'\'\n'}  
                                        {'           ]}\n'}                                 
                                        {'         renderItem={({item}) => <Text>{item.key}</Text>}\n'}
                                        {'         />\n'} 
                                        {'      </View>\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                        
                                        AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);{'\n\n'}
                                    </Text>

                                    <Text style={{fontWeight: 'bold'}}>SectionList{'\n\n'}</Text>
                                    If you want to render a set of data broken into logical sections, maybe with section headers, then a SectionList is the way to go.

                                    <Text style={{fontFamily: 'monospace', fontSize: 10}}>
                                        import React, {'{'} Component {'}'} from 'react';{'\n'}
                                        import {'{'} AppRegistry, Text, FlatList, View {'}'}{'\n                        '} from 'react-native';{'\n'}
                                        export default class SectionListBasics extends Component {'{\n'}
                                        {'  '}render() {'{\n'}
                                        {'    '}return ( {'\n'}
                                        {'      <View>\n'}
                                        {'         <SectionList\n'}   
                                        {'           sections={[\n'}
                                        {'             {title: \''}D{'\', '}{'data: [\''}Devin{'\']},\n'}
                                        {'             {title: \''}J{'\', '}{'data: [\''}Jackson',{'\n                     '} 'James', 'Jillian{'\']},\n'}
                                        {'           ]}\n'}                                 
                                        {'         renderItem={({item}) => <Text>{item.key}</Text>}\n'}
                                        {'         renderSectionHeader={({section}) => \n               <Text>{section.title}</Text>}\n'}
                                        {'         />\n'} 
                                        {'      </View\n'}
                                        {'    '}); {'\n'}
                                        {'  }\n'}
                                        {'}\n\n'}
                        
                                        AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);{'\n\n'}
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
                                    navigate('Networking');
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

