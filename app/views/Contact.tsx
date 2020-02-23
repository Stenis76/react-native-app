import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';

export class Contact extends React.Component {
  public static navigationOptions = {
      header: null
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <Text style={{flex:8}}>contact jform</Text>
        <Text style={{flex:6}}>contactform</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});