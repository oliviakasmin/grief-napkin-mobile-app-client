import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import {Text} from '../elements'
import bgImage from '../assets/images/wave.gif'
import { colors, sizes } from '../config';

const {width: WIDTH} = Dimensions.get('window')
export default class WelcomeScreen extends Component {
  render(){
    return (
      <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.topBox} >
          <Text h1 bold> Grief Napkin</Text>
        </View>
        <TouchableOpacity style={styles.loginBtn }>
          <Text h2 bold center> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text h2 bold white center> Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
    
  }
}
 

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1
  },
  topBox: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'baseline',
    position: 'absolute', 
    top: 100 
  }, 
  loginBtn: {
    width: WIDTH - 55,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 550,
    backgroundColor: 'white'
  },
  signUpBtn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 20
  }
 
});