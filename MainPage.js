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
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
    BackHandler
} from 'react-native';
// import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast, Header } from "native-base"
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datacmgIn: [],
            datacmgOrd: [],
            auth: this.props.navigation.state.params.auth,
        }
        this.Logout = this.Logout.bind(this);
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onbackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onbackPress)
    }
    Logout(){
        this.setState({
            auth:false
        })
        this.props.navigation.navigate('SignIn')
    }
    render() {
        // console.log(this.props, " this props");
        return (
            <Container>
                <View style={{ height: width / 8, backgroundColor: "#C21807", display: "flex", flexDirection: "row" }}>
                    <View style={{ width: "25%", height: width / 8 }}></View>
                    <View style={{ width: "50%", height: width / 8, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: 23, color: "white" }}>My dashboard</Text>
                    </View>
                    <View style={{ width: "25%", height: width / 8 }}></View>
                </View>

                <ScrollView>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Orders', { ordered1: this.props.navigation.state.params.resName, Prod1: this.state.datacmgOrd })} style={{ height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Order Management</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>New orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>In-process orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Completed orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>


                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ViewProduct', { ordered: this.props.navigation.state.params.resName, Prod: this.state.datacmgIn })} style={{ height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        {/* <View style={{ width: "25%", height: width / 8 }}></View> */}
                        <View style={{ width: "70%", height: width / 8, alignSelf: "center", display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Menu Management</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>My menu list</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        {/* <View style={{ width: "25%", height: width / 8 }}></View> */}
                        <View style={{ width: "70%", height: width / 8, alignSelf: "center", display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>My Earnings</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>This week's income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Last week's income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Total income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        {/* <View style={{ width: "25%", height: width / 8 }}></View> */}
                        <View style={{ width: "70%", height: width / 8, alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807", display: "flex", justifyContent: "center" }}>My Profile</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Update profile</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </View>

                    <View style={{ height: width / 8, display: "flex", backgroundColor: "#f7f7f7", flexDirection: "row" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Help and support</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.Logout()} style={{ height: width / 8, display: "flex", backgroundColor: "#f7f7f7", flexDirection: "row" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Log out</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                        <View style={{ width: "50%", height: width / 8 }}>
                        </View>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                        <View style={{ width: "50%", height: width / 8 }}>
                        </View>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                    </View>

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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
