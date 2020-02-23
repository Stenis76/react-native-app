import React  from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Menu } from "../sections/Menu";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {
  
}

export class Home extends React.Component<Props, {}> {
  
  render(){
    
    
    
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <Hero />
        
        <Menu />
      
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5085a5',

  }
});