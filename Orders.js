/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
// type Props = {};
export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checking: this.props.navigation.state.params.ordered1,
            datacmg: this.props.navigation.state.params.Prod1,
            filtered1: []
        }
        this.filter = this.filter.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.filter(this.state.datacmg);
    }
    filter(datacomming) {
        let data = [];
        for (let i = 0; i < datacomming.length; i++) {
            if (datacomming[i].OrderRestaurant == this.state.checking) {
                data.push(datacomming[i])
            }
        }
        this.setState({
            filtered1: data
        })
    }
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        return (
                <Container>
                    <ScrollView>
                        {this.state.filtered1.map((data, i) => {
                            return (
                                <Content>
                                    <Card style={{ flex: 0 }}>
                                        <CardItem>
                                            <Left>
                                                <Thumbnail source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/logo.jpeg?alt=media&token=a312edfb-6a2e-48a2-a00d-b0da7e6c08dd' }} />
                                                <Body>
                                                    <Text>{data.OrderNo}</Text>
                                                    <Text note>{data.OrderData}</Text>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} style={{ height: 200, width: 200, flex: 1 }} />
                                                <Text>
                                                    {data.OrderDetails}-{data.OrderStatus}
                                                </Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Button transparent textStyle={{ color: '#87838B' }}>
                                                    {/* <Icon name="logo-github" /> */}
                                                </Button>
                                            </Left>
                                        </CardItem>
                                    </Card>
                                </Content>
                            )
                        })}
                    </ScrollView>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
