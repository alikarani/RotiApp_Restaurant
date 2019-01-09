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
        this.Get = this.Get.bind(this);
        this.GetOrd = this.GetOrd.bind(this);
    }
    // componentWillMount() {
    //     // alert("hbdbg");
    //     firebase.database().ref("user/" + firebase.auth().currentUser.uid).once("value")
    //         .then(success => {
    //             console.log(success.val())
    //             success.val().imagelink ? this.setState({ username: success.val().name, avatarSource: success.val().imagelink, accountType: success.val().accountType }) : this.setState({ username: success.val().name, accountType: success.val().accountType })
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }

    // uploadImage = (uri, imageName, mime = 'image/jpg') => {
    //     console.log("1");
    //     return new Promise((resolve, reject) => {
    //         console.log("2");
    //         const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    //         let uploadBlob = null
    //         const imageRef = firebase.storage().ref('posts').child(imageName)
    //         fs.readFile(uploadUri, 'base64')
    //             .then((data) => {
    //                 console.log("then 1")
    //                 return Blob.build(data, { type: `${mime};BASE64` })
    //             })
    //             .then((blob) => {
    //                 console.log("then 2")
    //                 uploadBlob = blob
    //                 return imageRef.put(blob, { contentType: mime })
    //             })
    //             .then(() => {
    //                 console.log("then 3")
    //                 uploadBlob.close()
    //                 return imageRef.getDownloadURL()
    //             })
    //             .then((url) => {
    //                 console.log("then 4")
    //                 // this.uploadonFirebase(url)      
    //                 this.setState(
    //                     {
    //                         avatarSource: url
    //                     }
    //                 )
    //                 this.uploadonFirebase(this.state.avatarSource)
    //                 resolve(url)
    //             })
    //             .catch((error) => {
    //                 console.log("cath")
    //                 reject(error)
    //             })
    //     })
    // }  //        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)    
    // uploadonFirebase = (imagelink) => {
    //     firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).update({ imagelink })
    // }
    // start = () => {
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             let source = { uri: response.uri };

    //             // You can also display the image using data:
    //             // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    //             this.setState({
    //                 // avatarSource: response.uri
    //             });
    //         }
    //         // console.log(this.state.avatarSource)
    //         this.uploadImage(response.uri, firebase.auth().currentUser.uid);
    //         // this.uploadonFirebase(this.state.avatarSource)
    //     });
    // }
    UNSAFE_componentWillMount() {
        this.Get();
        this.GetOrd();
    }
    GetOrd() {
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
                datacmgOrd: data
            })
        }
        ).catch(error => alert(error));
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
            this.setState({
                datacmgIn: data
            })
        }
        ).catch(error => alert(error));
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: width / 4, backgroundColor: "#9f80d3", flexDirection: "row" }}>
                    <TouchableOpacity activeOpacity={1} style={{ height: width / 5, alignSelf: "center", marginLeft: "5%", borderRadius: 100, overflow: "hidden", backgroundColor: "rgb(180,180,180)" }}>
                        <Image
                            onPress={() => this.start()}
                            source={{ uri: this.state.avatarSource }}
                            style={{ height: width / 5, width: width / 5 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: "blue", alignSelf: "center", fontSize: fontScale * 23, marginLeft: "5%" }}>{this.props.resName}</Text>
                </View>

                <TouchableOpacity activeOpacity={1} style={{ height: width / 4, borderBottomColor: "blue", borderBottomWidth: 1, backgroundColor: "rgb(180,180,180)", flexDirection: "row" }} onPress={() => { this.props.onclose() }} >
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