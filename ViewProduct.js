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
export default class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checking: this.props.navigation.state.params.ordered,
            datacmg: this.props.navigation.state.params.Prod,
            filtered:[]
        }
        // this.Get = this.Get.bind(this);
        this.filter = this.filter.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        // fetch('http://localhost:5000/api/ninjas', {
        fetch('https://rotiappp.herokuapp.com/api/menu', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.filter(data);
        }
        ).catch(error => alert(error));
    }
    filter(datacomming) {
        let data = [];
        for (let i = 0; i < datacomming.length; i++) {
            if (datacomming[i].Restaurantname == this.state.checking) {
                data.push(datacomming[i])
            }
        }
        this.setState({
            filtered: data
        })
    }
    Delete(id) {
        fetch(`https://rotiappp.herokuapp.com/api/menu/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (response) {
            return response.json();
        }).then(data => alert("The Item has been Deleted")
        ).catch(error => alert(error));
    }
    render() {
        console.log("cv", this.props);
        return (
            <Container>
                <ScrollView>
                    {this.state.filtered.map((data, i) => {
                        return (
                            <Content>
                                <Card style={{ flex: 0 }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/logo.jpeg?alt=media&token=a312edfb-6a2e-48a2-a00d-b0da7e6c08dd' }} />
                                            <Body>
                                                <Text style={{ color: "blue", fontSize: 23 }}>{data.Itemname}</Text>
                                                <Text note style={{ color: "red", fontSize: 18 }}>{data.Restaurantname}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77' }} style={{ height: 200, width: 200, flex: 1 }} />
                                            <Text>
                                                {data.description}
                                            </Text>
                                            <Text>
                                                {data.basequantity}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button transparent textStyle={{ color: '#87838B' }}>
                                                {/* <Icon name="logo-github" /> */}
                                                <Text>Cost</Text>
                                                <Text>{data.cost}</Text>
                                            </Button>
                                            <Button onPress={() => this.props.navigation.navigate('EditProduct', {
                                                itmEd: data.Itemname,
                                                resEd: data.Restaurantname,
                                                desEd: data.description,
                                                basEd: data.basequantity,
                                                imgEd: data.image,
                                                cosEd: data.cost,
                                                update: true,
                                                idEd: data._id
                                            })}>
                                                <Text>Edit</Text>
                                            </Button>
                                            <Button onPress={() => this.Delete(data._id)}>
                                                <Text>Delete</Text>
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
