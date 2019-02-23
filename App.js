import React from "react";
import { View, Text, Button } from "react-native";
import { Drawer } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from './SignIn'
import SignUp from './SignUp'
import AddProduct from './AddProduct'
import ViewProduct from './ViewProduct'
import NewOrders from './NewOrders'
import InProcessOrder from './InProcessOrder'
import CompletedOrders from './CompletedOrdered'
import EditProduct from './EditProduct'
import MainPage from './MainPage'
import SideBar from './SideBar';
import ThisWeekIncome from './ThisWeekIncome'
import ThisMonthIncome from './ThisMonthIncome'
import TotalAmount from './TotalAmount'
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: this.props.navigation.state.params.resName
    }
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <Drawer
        navigation={this.props.navigation}
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} navigation={this.props.navigation} onclose={this.closeDrawer} />}
        panOpenMask={50}
        onClose={() => this.closeDrawer()} >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>{this.state.restaurantName}</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={this.openDrawer}>Open Drawer</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('AddProduct')}>Add Product</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('ViewProduct')}>View Product</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('Orders')}>View Orders</Text>
        </View>
      </Drawer>
    );
  }
}
const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    }
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      header: null,
    }
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      header: null,
    }
  },
  ViewProduct: {
    screen: ViewProduct,
    navigationOptions: {
      header: null,
    }
  },
  NewOrders: {
    screen: NewOrders,
    navigationOptions: {
      header: null,
    }
  },
  InProcessOrder: {
    screen: InProcessOrder,
    navigationOptions: {
      header: null,
    }
  },
  CompletedOrders: {
    screen: CompletedOrders,
    navigationOptions: {
      header: null,
    }
  },
  EditProduct: {
    screen: EditProduct,
    navigationOptions: {
      header: null,
    }
  },
  ThisWeekIncome: {
    screen: ThisWeekIncome,
    navigationOptions: {
      header: null,
    }
  },
  ThisMonthIncome: {
    screen: ThisMonthIncome,
    navigationOptions: {
      header: null,
    }
  },
  TotalAmount: {
    screen: TotalAmount,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(AppNavigator);