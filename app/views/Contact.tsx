import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';

export class Contact extends React.Component {
  public static navigationOptions = {
      header: null
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <Hero />
        <Text style={{flex:1}}>My Contacts: </Text>
       
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5085a5'
  }
});