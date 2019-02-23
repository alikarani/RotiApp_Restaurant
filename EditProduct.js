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
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Drawer } from 'native-base';
import SideBar from './SideBar';
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
            Itemname: this.props.navigation.state.params.itmEd,
            Restaurantname: this.props.navigation.state.params.resEd,
            description: this.props.navigation.state.params.desEd,
            basequantity: this.props.navigation.state.params.basEd,
            image: this.props.navigation.state.params.imgEd,
            cost: this.props.navigation.state.params.cosEd,
            id: this.props.navigation.state.params.idEd,
            // add: this.props.navigation.state.params.update
        }
        // this.Upload = this.Upload.bind(this);
        this.Update = this.Update.bind(this);
    }
    Update() {
        if (this.state.Itemname.length > 2) {
            if (this.state.description.length > 15) {
                if (this.state.basequantity > 10) {
                    if (this.state.cost > 20) {
                        let payload = {
                            "Itemname": `${this.state.Itemname}`,
                            "Restaurantname": this.props.navigation.state.params.resEd,
                            "description": `${this.state.description}`,
                            "basequantity": `${this.state.basequantity}`,
                            "image": `${this.state.image}`,
                            "cost": `${this.state.cost}`
                        }
                        fetch(`https://rotiappserver.herokuapp.com/api/menu/${this.state.id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload)
                        }).then(function (response) {
                            return response.json();
                        }).then(data => alert("Updated")
                        ).catch(error => alert(error));
                    }
                    else {
                        alert("The Quantity Should be greater than 20")
                        // break;
                    }
                }
                else {
                    alert("The base Quantity Should be Greater than 10");
                    // break;
                }
            }
            else {
                alert("Enter Valid Description!");
                // break;
            }
        }
        else {
            alert("Enter a valid Item Name");
        }
    }
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        console.log(this.state.cost, " yes");
        return (
            <Drawer
                navigation={this.props.navigation}
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} resName={this.props.navigation.state.params.resEd} navigation={this.props.navigation} onclose={this.closeDrawer} />}
                panOpenMask={50}
                onClose={() => this.closeDrawer()} >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={this.openDrawer}>
                                <Icon onPress={this.openDrawer} name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Edit Menu Items</Title>
                        </Body>
                        <Right />
                    </Header>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.start()} style={{ marginTop: "3%", alignSelf: "center", width: width / 2, height: width / 2, borderRadius: 100 }}>
                        <Image resizeMode="contain" style={{ width: width / 2, height: width / 2, borderRadius: 100 }} source={{ uri: this.state.avatarSource }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                        <TextInput
                            style={{ fontWeight: "bold", height: width / 7, width: width / 1.1, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(Itemname) => this.setState({ Itemname })}
                            value={this.state.Itemname}
                            placeholder="Itemname"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                        <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: fontScale * 25, backgroundColor: "rgba(100,200,150,0.5)", width: width / 1.1 }}>{this.props.navigation.state.params.resEd}</Text>
                    </View>
                    <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                        <TextInput
                            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 1.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(description) => this.setState({ description })}
                            value={this.state.description}
                            placeholder="description"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                    </View>

                    <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                        <TextInput
                            style={{ fontWeight: "bold", height: width / 7, width: width / 1.1, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(basequantity) => this.setState({ basequantity })}
                            value={this.state.basequantity}
                            placeholder="basequantity"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                        <TextInput
                            style={{ fontWeight: "bold", height: width / 7, width: width / 1.1, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(cost) => this.setState({ cost })}
                            value={this.state.cost}
                            placeholder="cost"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                    </View>
                    <Button onPress={() => this.Update()} style={{ marginTop: 2, backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, alignSelf: "center", justifyContent: "center" }}><Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>Update</Text></Button>
                </Container>
            </Drawer>
            // <Drawer
            //     navigation={this.props.navigation}
            //     ref={(ref) => { this.drawer = ref; }}
            //     content={<SideBar navigator={this.navigator} resName={this.props.navigation.state.params.resEd} navigation={this.props.navigation} onclose={this.closeDrawer} />}
            //     panOpenMask={50}
            //     onClose={() => this.closeDrawer()} >
            //     < View style={styles.container} >
            //         <View style={{ width, height: 50, backgroundColor: "red" }}><Text style={{ color: "white", fontSize: 25 }} onPress={this.openDrawer}>Open Drawer</Text></View>
            //         <View style={{ display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
            //             <TextInput
            //                 style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            //                 onChangeText={(Itemname) => this.setState({ Itemname })}
            //                 value={this.state.Itemname}
            //                 placeholder="Itemname"
            //                 placeholderTextColor="#ffffff"
            //                 autoCapitalize='none'
            //             />
            //             <Text style={{ fontSize: 18, backgroundColor: "rgba(100,200,150,0.5)" }}>{this.props.navigation.state.params.resEd}</Text>
            //         </View>
            //         <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
            //             <TextInput
            //                 style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            //                 onChangeText={(description) => this.setState({ description })}
            //                 value={this.state.description}
            //                 placeholder="description"
            //                 placeholderTextColor="#ffffff"
            //                 autoCapitalize='none'
            //             />
            //             <TextInput
            //                 style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            //                 onChangeText={(basequantity) => this.setState({ basequantity })}
            //                 value={this.state.basequantity}
            //                 placeholder="basequantity"
            //                 placeholderTextColor="#ffffff"
            //                 autoCapitalize='none'
            //             />
            //         </View>
            //         <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
            //             <TextInput
            //                 style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            //                 onChangeText={(cost) => this.setState({ cost })}
            //                 value={this.state.cost}
            //                 placeholder="cost"
            //                 placeholderTextColor="#ffffff"
            //                 autoCapitalize='none'
            //             />
            //             <TextInput
            //                 style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            //                 onChangeText={(image) => this.setState({ image })}
            //                 value={this.state.image}
            //                 placeholder="image"
            //                 placeholderTextColor="#ffffff"
            //                 autoCapitalize='none'
            //             />
            //         </View>
            //         <Button onPress={() => this.Update()} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Update</Text></Button>
            //     </View >
            // </Drawer>
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
