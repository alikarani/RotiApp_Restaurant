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
            datacmg: []
        }
        // this.Upload = this.Upload.bind(this);
        this.Get = this.Get.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        // fetch('http://localhost:5000/api/ninjas', {
        fetch('https://rotiappp.herokuapp.com/api/orders', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                datacmg: data
            })
        }
        ).catch(error => alert(error));
    }
    // Delete(id) {
    //     fetch(`https://rotiappp.herokuapp.com/api/orders/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(function (response) {
    //         return response.json();
    //     }).then(data => alert("The Item has been Deleted")
    //     ).catch(error => alert(error));
    // }
    render() {
        return (
            <Container>
                <ScrollView>
                    {this.state.datacmg.map((data, i) => {
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
                                                <Icon name="logo-github" />
                                                {/* <Text>{data.cost}</Text> */}
                                            </Button>
                                            {/* <Button onPress={() => this.props.navigation.navigate('AddProduct', {
                                                Itemname: data.Itemname,
                                                Restaurantname: data.Restaurantname,
                                                description: data.description,
                                                basequantity: data.basequantity,
                                                image: data.image,
                                                cost: data.cost,
                                                update: true,
                                            })}>
                                                <Text>Edit</Text>
                                            </Button>
                                            <Button onPress={() =>this.Delete(data._id)}>
                                                <Text>Delete</Text>
                                            </Button> */}
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
