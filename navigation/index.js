import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Platform, Image} from 'react-native';


import welcome from '../screens/welcome';
import login from '../screens/login';


import { colors, sizes } from '../config';


const components = createStackNavigator(
    {
        welcome: welcome,
        login: login,
    },
    {
        initialRouteParams:'browse',
        defaultNavigationOptions: {
            headerStyle: {
                height: sizes.base*4,
                backgroundColor: colors.white,
                borderBottomColor: "transparent",
                elevation: 0 //for android devices. Disabling the elevation of header
            },
            headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: Platform.OS === 'ios' ? sizes.base : 0,
                padding: sizes.base,
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                marginLeft: Platform.OS === 'ios' ? sizes.base : 0,
                padding: sizes.base,
            },
        }
    }
);

export default createAppContainer(components);