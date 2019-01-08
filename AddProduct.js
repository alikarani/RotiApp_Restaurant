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
    ScrollView
} from 'react-native';
import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast } from "native-base"

const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: "https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77",
            Itemname: this.props.navigation.state.params.Itemname || "",
            Restaurantname: this.props.navigation.state.params.Restaurantname || "",
            description: this.props.navigation.state.params.description || "",
            basequantity: this.props.navigation.state.params.basequantity,
            image: this.props.navigation.state.params.image.length || "",
            cost: this.props.navigation.state.params.cost,
            id:this.props.navigation.state.params._id,
            add: this.props.navigation.state.params.update
        }
        this.Upload = this.Upload.bind(this);
        this.Update = this.Update.bind(this);
    }
    Upload() {
        let payload = {
            "Itemname": `${this.state.Itemname}`,
            "Restaurantname": `${this.state.Restaurantname}`,
            "description": `${this.state.description}`,
            "basequantity": `${this.state.basequantity}`,
            "image": `${this.state.image}`,
            "cost": `${this.state.cost}`
        }
        fetch('https://rotiappp.herokuapp.com/api/menu', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(data => this.setState({
            Itemname: "",
            Restaurantname: "",
            description: "",
            basequantity: "",
            image: "",
            cost: ""
        })
        ).catch(error => alert(error));
    }
    Update() {
        let payload = {
            "Itemname": `${this.state.Itemname}`,
            "Restaurantname": `${this.state.Restaurantname}`,
            "description": `${this.state.description}`,
            "basequantity": `${this.state.basequantity}`,
            "image": `${this.state.image}`,
            "cost": `${this.state.cost}`
        }
        fetch(`https://rotiappp.herokuapp.com/api/menu/${this.state.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(data => this.setState({
            Itemname: "",
            Restaurantname: "",
            description: "",
            basequantity: "",
            image: "",
            cost: ""
        })
        ).catch(error => alert(error));
    }
    render() {
        // const { navigation } = this.props;
        // const resname = navigation.getParam('Restaurantname', 'some default value');
        // alert(resname);
        return (
            < View style={styles.container} >
                <View style={{ display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(Itemname) => this.setState({ Itemname })}
                        value={this.state.Itemname}
                        placeholder="Itemname"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(Restaurantname) => this.setState({ Restaurantname })}
                        // {...this.setState({
                        //     Restaurantname:resname
                        // })}
                        value={this.state.Restaurantname}
                        placeholder="Restaurantname"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(description) => this.setState({ description })}
                        value={this.state.description}
                        placeholder="description"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(basequantity) => this.setState({ basequantity })}
                        value={this.state.basequantity}
                        placeholder="basequantity"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(cost) => this.setState({ cost })}
                        value={this.state.cost}
                        placeholder="cost"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(image) => this.setState({ image })}
                        value={this.state.image}
                        placeholder="image"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                {this.state.add ?
                    <Button onPress={() => this.Upload()} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Add</Text></Button>
                    :
                    <Button onPress={() => this.Update()} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Update</Text></Button>
                }
            </View >
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
