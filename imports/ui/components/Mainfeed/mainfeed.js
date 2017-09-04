import React, { Component } from 'react';
import { AppRegistry, View, BackHandler, TouchableOpacity, Image} from 'react-native';
import { Container, Content, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text, Thumbnail } from 'native-base';
import Feedcard from '../Feedcard/feedcard';
import Sound from 'react-native-sound';

export default class mainfeed extends Component {
    
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            mainfeed: false
        };
        let click = new Sound('click2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error)
                return;
        });
        // this.handle_bgMusic = (() => {
        //     bgmusic.stop();
        //     //return false; //close the app
        // }).bind(this) //don't forget bind this, you will remember anyway.

    }

    handleNavigation(title){
        // this.handle_bgMusic();
        let click = new Sound('click2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error)
                return;
            click.play();
        });
        
        const { navigate } = this.props.navigation;
        navigate(title);        
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handle_bgMusic);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handle_bgMusic);
    // }

    render() {
        const { navigate } = this.props.navigation;
        let click = new Sound('push.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error)
                return;
        });
        let bodyContent = 
            <Content style={{backgroundColor: '#01A3D2'}}>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center', paddingTop: '20%'}}>
                        <Thumbnail large source={require('./../../../assets/images/reactLogo.png')} />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'sans-serif-thin', fontSize: 40, color: 'white'}}>
                            React Native
                        </Text>
                        
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center', paddingTop: '25%'}}>
                        <Button style={{borderRadius: 8, backgroundColor: '#1976D2'}} onPress={() => {
                                click.play();
                                this.setState({
                                    mainfeed: true
                                })
                            }
                        }>
                            <Text> Let's Start !! </Text>
                        </Button> 
                    </View>
                       
                </View>   
            </Content>
        let that = this;
        if(this.state.mainfeed){
            bodyContent = 
                <Content style={{padding: '2%', marginBottom: '2%'}}>
                    <Feedcard title1='0. Getting Started' title2='1. Learn the Basics' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='2. Props' title2='3. State' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='4. Styling' title2='5. Height and Width' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='6. Flexbox' title2='7. ListView' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='8. Layout with Flexbox' title2='9. Handling Text Input' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='10. Handling Touches' title2='11. Using a ScrollView' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='12. Using List Views' title2='13. Networking' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='14. Intro to Native Base' title2='15. Anatomy' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='16. ActionSheet' title2='17. Badge' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='18. Button' title2='19. Card' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='20. Deck Swipper' title2='21. FABs' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='22. Footer Tabs' title2='23. Form' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='24. Header' title2='25. Icon' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='26. Layout' title2='27. List' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='28. Picker' title2='29. Radio Button' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='30. Search Bar' title2='31. Segment' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='32. Spinner' title2='33. Swipable List' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='34. Tabs' title2='35. Thumbnail' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='36. Toast' title2='37. Typography' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                    <Feedcard title1='38. Navigation' title2='39. Drawer' color1='unlocked' color2='unlocked' pressFunc={this.handleNavigation.bind(this)}/>
                </Content>
        }
        return (
            <Container>
                <Header androidStatusBarColor='#039BE5' style={{backgroundColor:'#29B6F6'}} >
                    <Button transparent><Icon name='menu' /></Button>
                    <Body>
                        <Title style={{paddingLeft: '7%'}}>
                            Learn React Native
                        </Title>
                    </Body>
                    <Right />                    
                </Header>
                {bodyContent}                
            </Container>
        );
    }
}

