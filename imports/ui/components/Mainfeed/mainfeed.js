import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import { Container, Content, Header, Body, Right, Button, Icon, Title, Card, CardItem, Text } from 'native-base';
import Feedcard from '../Feedcard/feedcard';

export default class LearnReactNative extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={{marginBottom: '2%'}}>
                <Header backgroundColor='#29B6F6' androidStatusBarColor='#039BE5'>
                    <Button transparent><Icon name='menu' /></Button>
                    <Body>
                        <Title style={{paddingLeft: '7%'}}>
                            Learn React Native
                        </Title>
                    </Body>
                    <Right />                    
                </Header>
                <Content style={{padding: '2%'}}>
                    <Feedcard title1='0. Getting Started' title2='1. Learn the Basics' color1='unlocked' color2='unlocked'/>
                    <Feedcard title1='2. Props' title2='3. State' color1='unlocked' color2='locked'/>
                    <Feedcard title1='4. Style' title2='5. Height and Width' color1='locked' color2='locked'/>
                    <Feedcard title1='6. Flexbox' title2='7. ListView' color1='locked' color2='locked'/>
                    <Feedcard title1='8. Layout with Flexbox' title2='9. Handling Text Input' color1='locked' color2='locked'/>
                    <Feedcard title1='10. Handling Touches' title2='11. Using a ScrollView' color1='locked' color2='locked'/>
                    <Feedcard title1='12. Using List Views' title2='13. Networking' color1='locked' color2='locked'/>
                    <Feedcard title1='14. Getting Started with Native Base' title2='15. Anatomy' color1='locked' color2='locked'/>
                    <Feedcard title1='16. ActionSheet' title2='17. Badge' color1='locked' color2='locked'/>
                    <Feedcard title1='18. Button' title2='19. Card' color1='locked' color2='locked'/>
                    <Feedcard title1='20. Deck Swipper' title2='21. FABs' color1='locked' color2='locked'/>
                    <Feedcard title1='22. Footer Tabs' title2='23. Form' color1='locked' color2='locked'/>
                    <Feedcard title1='24. Header' title2='25. Icon' color1='locked' color2='locked'/>
                    <Feedcard title1='26. Layout' title2='27. List' color1='locked' color2='locked'/>
                    <Feedcard title1='28. Picker' title2='29. Radio Button' color1='locked' color2='locked'/>
                    <Feedcard title1='30. Search Bar' title2='31. Segment' color1='locked' color2='locked'/>
                    <Feedcard title1='32. Spinner' title2='33. Swipable List' color1='locked' color2='locked'/>
                    <Feedcard title1='34. Tabs' title2='35. Thumbnail' color1='locked' color2='locked'/>
                    <Feedcard title1='36. Toast' title2='37. Typography' color1='locked' color2='locked'/>
                    <Feedcard title1='38. Navigation' title2='39. Drawer' color1='locked' color2='locked'/>                    
                </Content>
                

                
            </Container>
        );
    }
}

