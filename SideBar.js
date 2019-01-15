import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, Drawer, FooterTab, Button, Icon, List, ListItem } from 'native-base';
// import * as firebase from 'firebase';
// import ImagePicker from "react-native-image-picker"
// import RNFetchBlob from 'react-native-fetch-blob'
const { height, width, fontScale, } = Dimensions.get('window');

// var options = {
//     title: 'Select Image',
// customButtons: [
//     { name: 'fb', title: 'Choose Photo from Facebook' },
// ],
//     storageOptions: {
//         skipBackup: true,
//         path: 'images'
//     }
// };



// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob



class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.resName,
            accountType: "user",
            datacmgIn: [],
            datacmgOrd: [],
            avatarSource: "https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/logo.jpeg?alt=media&token=a312edfb-6a2e-48a2-a00d-b0da7e6c08dd"
        }
        // this.Get = this.Get.bind(this);
        // this.GetOrd = this.GetOrd.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: width / 4, flexDirection: "row" }}>
                    <TouchableOpacity activeOpacity={1} style={{ height: width / 5, borderBottomColor: "blue", borderBottomWidth: 1, alignSelf: "center", marginLeft: "5%", borderRadius: 100, overflow: "hidden", backgroundColor: "rgb(180,180,180)" }}>
                        <Image
                            onPress={() => this.start()}
                            source={{ uri: this.state.avatarSource }}
                            style={{ height: width / 5, width: width / 5 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: "blue", alignSelf: "center", fontSize: fontScale * 23, marginLeft: "5%" }}>{this.props.resName}</Text>
                </View>

                <TouchableOpacity activeOpacity={1} style={{ height: width / 4, borderBottomColor: "blue", borderBottomWidth: 1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }} onPress={() =>this.props.navigation.navigate('AddProduct')} >
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-home" />
                    </View>
                    <Text style={{ color: "red", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{ height: width / 4, borderBottomColor: "blue", borderBottomWidth: 1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }} onPress={() => this.props.navigation.navigate('ViewProduct', { ordered: this.props.resName, Prod: this.state.datacmgIn })}>
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-basket" />
                    </View>
                    <Text onPress={() => this.props.navigation.navigate('ViewProduct', { ordered: this.props.resName, Prod: this.state.datacmgIn })} style={{ color: "red", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>View Product</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={{ height: width / 4, borderBottomColor: "blue", borderBottomWidth: 1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }} onPress={() => this.props.navigation.navigate('Orders', { ordered1: this.props.resName, Prod1: this.state.datacmgOrd })} >
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-basket" />
                    </View>
                    <Text onPress={() => this.props.navigation.navigate('Orders', { ordered1: this.props.resName, Prod1: this.state.datacmgOrd })} style={{ color: "red", alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }}>View Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('SignIn')} style={{ height: width / 4, borderBottomColor: "blue", borderBottomColor: "blue", borderBottomWidth: 1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }}>
                    <View style={{ alignSelf: "center", marginLeft: "5%" }}>
                        <Icon name="ios-basket" />
                    </View>
                    <Text style={{ color: 'blue', alignSelf: "center", fontSize: fontScale * 25, marginLeft: "5%" }} >Logout</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'rgb(180,180,180)'}}>

                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(180,180,180)',
    },
    textContent: {
        fontSize: 20,
        color: 'red',
    },
    uploadAvatar: {
        height: 60, width: 60
    }
});

export default SideBar;