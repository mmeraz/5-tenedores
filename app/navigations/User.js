import React  from "react";
import { Icon } from 'react-native-elements';
//import { createStackNavigator } from 'react-navigation-stack';


import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
}   from "react-navigation";

//Screens importamos los Js 
import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
//Screens MyAccount
import MyAccountScreen from "../screens/MyAccount/MyAccount";
import RegisterScreen from "../screens/MyAccount/Register";
//import MyAccountScreen from "../screens/MyAccount/MyAccount";
//import RegisterScreen from "../screens/MyAccount/Register";

const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    }
});

const topFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Top 5 Restaurantes"
        })
    }
   
});

const searchScreenStack = createStackNavigator({
   Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Buscar"
        })
    }
   
});

const myAccountScreenStack  = createStackNavigator({
    MyAccount: {
         screen: MyAccountScreen,
         navigationOptions: ({ navigation }) => ({
             title: "Mi cuenta"
         })
     },
     Register: {
         screen: RegisterScreen,
         navigationOptions: ({ navigation}) => ({
             title: "Registro"
         })
     }    
 });

 const RootStack = createBottomTabNavigator({
     Home: {
         screen: homeScreenStack,
         navigationOptions: ({ navigation }) => ({
             tabBarLabel: "Inicio",
             tabBarIcon: ({ tintColor}) => (
                <Icon
                name="compass-outline" 
                type="material-community"
                size={22}
                color={tintColor}
                />
             )
         })
    },

    TopFive: {
        screen: topFiveScreenStack,
        navigationOptions: ({ navigation}) => ({
            tabBarLabel: "Top 5",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="star-three-points"
                    type="material-community"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },

    Search: {
        screen: searchScreenStack,
        navigationOptions: ({ navigation}) => ({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tintColor}) => (
                <Icon
                    name="magnify"
                    type="material-community"
                    size={22}
                    color={tintColor}
                
                />
            )
        })
    },

    MyAccount: {
        screen: myAccountScreenStack,
        navigationOptions: ({ navigation}) => ({
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({ tintColor}) => (
                <Icon
                name="home-outline"
                type="material-community"
                size={22}
                color={tintColor}

                />
            )
        })
    }
 },

{
    initialRouteName: "MyAccount", // donde inicia la apps
    order: ["Home","Search","TopFive", "MyAccount"], // orden de enlistar 
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
}
);

 export default createAppContainer(RootStack);
