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
export default class NewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checking: this.props.navigation.state.params.ordered1,
            filtered1: []
        }
        this.Get = this.Get.bind(this);
        this.Accepted = this.Accepted.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        fetch(`https://dry-coast-84806.herokuapp.com/api/orders/${this.state.checking}/New Orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                filtered1: data
            })
        }
        ).catch(error => alert("No Orders"));
    }
    Accepted(data) {
        // let payload = {
        //     "Cancel": data.Cancel,
        //     "SNo":`${data.no}` ,
        //     "OrderStatus": "AcceptedbyRestaurant",
        //     "OrderNo":`${data.OrderNo}`,
        //     "UserId":`${data.UserId}`,
        //     "OrderDetails":`${data.OrderDetails}`,
        //     "OrderDriver":`${data.OrderDriver}`,
        //     "OrderItems":`${data.OrderItems}`,
        //     "TotalCost":`${data.TotalCost}`,
        //     "DeliveryAddress":`${data.DeliveryAddress}`,
        //     "OrderData":`${data.OrderData}`
        // }
        // console.log(payload," payload");
        fetch(`https://dry-coast-84806.herokuapp.com/api/orders/${data.Id}/AcceptedbyRestaurant`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(payload)
        }).then(function (response) {
        }).then(data => this.Get()
        ).catch(error => alert(error));
    }
    render() {
        return (
            <ScrollView>
                <Container>
                    <Content>
                        {this.state.filtered1.map((data, i) => {
                            // console.log(data," /data");
                            return (
                                <Card style={{ flex: 0 }}>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>
                                                    Order Driver: {data.OrderDriver}
                                                </Text>
                                                <Text>
                                                    Order Status: {data.OrderStatus}
                                                </Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            {data.OrderItems && data.OrderItems.map((d, i) => {
                                                return (
                                                    <Text>Name:{d.name} - Quantity:{d.quantity} - Price:{d.price}</Text>
                                                )
                                            })}
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button success textStyle={{ color: '#87838B' }} onPress={() => this.Accepted(data)} >
                                                <Text>Accepted</Text>
                                            </Button>
                                            <Button danger textStyle={{ color: '#87838B' }}>
                                                <Text>Decline</Text>
                                            </Button>
                                        </Left>
                                    </CardItem>
                                </Card>
                            )
                        })}
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
