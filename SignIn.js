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
    TouchableNativeFeedback,
    Dimensions,
    ScrollView,
    TextInput,
} from 'react-native';
import { Button, CheckBox, ListItem } from "native-base";
// import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            datacmg: ""
        }
        this.Get = this.Get.bind(this);
        this.Login = this.Login.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        fetch('https://rotiappp.herokuapp.com/api/restaurants', {
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
    Login() {
        for (let i = 0; i < this.state.datacmg.length; i++) {
            if (this.state.datacmg[i].email == this.state.email) {
                if (this.state.datacmg[i].Password == this.state.password) {
                    if (this.state.datacmg[i].ApprovedAccount == true) {
                        this.props.navigation.navigate('AddProduct',{resName:this.state.datacmg[i].restaurantname})
                        this.setState({
                            email:"",
                            password:""
                        })
                        break;
                    }
                    else{
                        alert("Account not Authorized!");
                        break;
                    }
                }
                else {
                    alert("Password not match");
                    break;
                }
            }
            else {
                alert("Email not match");
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
                    <View style={{ height: width / 3.5, width }}></View>
                    <View style={{ height: width / 5, justifyContent: "center" }}>
                        <Image
                            resizeMode="contain"
                            style={{ width: width / 3, alignSelf: "center" }}
                            source={require("./logo.jpeg")}
                        />
                    </View>
                    <View style={{ height: width / 7, width }}></View>
                    <View style={{ alignSelf: "center", borderRadius: 16, height: width / 1.2, width: width / 1.1, backgroundColor: "rgba(10,50,80,0.5)" }}>
                        <TextInput
                            underlineColorAndroid="white"
                            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, width, color: "rgb(99, 212, 218)", backgroundColor: "none", fontSize: fontScale * 19, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            placeholder="Email"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                        <TextInput
                            underlineColorAndroid="white"
                            style={{ color: "rgb(99, 212, 218)", fontWeight: "bold", height: width / 4, width, backgroundColor: "none", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholder="Password"
                            placeholderTextColor="#ffffff"
                            secureTextEntry={true}
                            autoCapitalize='none'
                        />
                        <Button style={{ height: width / 8, width: width / 1.7, backgroundColor: "purple", borderRadius: 24, alignSelf: "center", paddingLeft: "23%", marginTop: "5%" }} onPress={() => this.Login()}><Text style={{ color: "white", fontSize: fontScale * 25, fontWeight: "bold", justifyContent: "center" }}>SIGN IN</Text></Button>
                        <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}><Text style={{ color: "#ffffff", fontSize: fontScale * 22, fontWeight: "bold" }}>Dont Have an Account? </Text><Text onPress={() => this.props.navigation.navigate("SignUp")} style={{ textDecorationLine: 'underline', color: "#ffffff", fontSize: fontScale * 22 }}>Sign Up</Text></View>
                    </View>
                </ScrollView>
            </View>
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
