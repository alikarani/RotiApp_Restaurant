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
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // avatarSource: "https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77",
      location: "",
      restaurantname: "",
      firstname: "",
      lastname: "",
      yourtitle: "",
      phoneno: "",
      email: "",
      Password:"",
      noOflocations: "",
      typeOfCuisine: "",
      EstimatedWeeklyOrder: "",
      CurrentlyOfferDelivery: false,
      zipcode: "",
      approved: false
    }
    this.Upload = this.Upload.bind(this);
    // this.Get = this.Get.bind(this);
  }
  // UNSAFE_componentWillMount() {
  //   // this.Get();
  // }
  // Get() {
  //   // fetch('http://localhost:5000/api/ninjas', {
  //   fetch('https://rotiappp.herokuapp.com/api/restaurants', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(data => {
  //     alert('Success');
  //   }
  //   ).catch(error => alert(error));
  // }

  Upload() {
    let payload = {
      "CurrentlyOfferDelivery": this.state.CurrentlyOfferDelivery,
      "ApprovedAccount": this.state.approved,
      "location": `${this.state.location}`,
      "restaurantname": `${this.state.restaurantname}`,
      "zipcode": `${this.state.zipcode}`,
      "firstname": `${this.state.firstname}`,
      "lastname": `${this.state.lastname}`,
      "yourtitle": `${this.state.yourtitle}`,
      "phoneno": `${this.state.phoneno}`,
      "email": `${this.state.email}`,
      "Password": `${this.state.Password}`,
      "noOflocations": `${this.state.noOflocations}`,
      "typeOfCuisine": `${this.state.typeOfCuisine}`,
      "EstimatedWeeklyOrder": `${this.state.EstimatedWeeklyOrder}`
    }
    fetch('https://rotiappp.herokuapp.com/api/restaurants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }).then(function (response) {
      return response.json();
    }).then(data =>{ this.setState({
      location: "",
      restaurantname: "",
      firstname: "",
      lastname: "",
      yourtitle: "",
      phoneno: "",
      email: "",
      noOflocations: "",
      typeOfCuisine: "",
      EstimatedWeeklyOrder: "",
      CurrentlyOfferDelivery: false,
      zipcode: "",
      approved: false,
      Password:""
    })
    this.props.navigation.navigate('Home')
  }
    ).catch(error => alert(error));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(location) => this.setState({ location })}
            value={this.state.location}
            placeholder="location"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(restaurantname) => this.setState({ restaurantname })}
            value={this.state.restaurantname}
            placeholder="restaurantname"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(firstname) => this.setState({ firstname })}
            value={this.state.firstname}
            placeholder="firstname"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(lastname) => this.setState({ lastname })}
            value={this.state.lastname}
            placeholder="lastname"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(yourtitle) => this.setState({ yourtitle })}
            value={this.state.yourtitle}
            placeholder="yourtitle"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(phoneno) => this.setState({ phoneno })}
            value={this.state.phoneno}
            placeholder="phoneno"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder="email"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(noOflocations) => this.setState({ noOflocations })}
            value={this.state.noOflocations}
            placeholder="noOflocations"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.3, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(typeOfCuisine) => this.setState({ typeOfCuisine })}
            value={this.state.typeOfCuisine}
            placeholder="typeOfCuisine"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.1, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(EstimatedWeeklyOrder) => this.setState({ EstimatedWeeklyOrder })}
            value={this.state.EstimatedWeeklyOrder}
            placeholder="EstimatedWeeklyOrder"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(CurrentlyOfferDelivery) => this.setState({ CurrentlyOfferDelivery })}
            value={this.state.CurrentlyOfferDelivery}
            placeholder="CurrentlyOfferDelivery"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
          <TextInput
            style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
            onChangeText={(zipcode) => this.setState({ zipcode })}
            value={this.state.zipcode}
            placeholder="zipcode"
            placeholderTextColor="#ffffff"
            autoCapitalize='none'
          />
        </View>
        <Button onPress={() => this.Upload()} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Upload</Text></Button>
      {/*  this.Upload() 
                onPress={() => this.props.navigation.navigate('Details')}
      */}
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
