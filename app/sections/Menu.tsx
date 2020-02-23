import React from "react";
import { StyleSheet, View, Alert, Text, TouchableOpacity } from "react-native";

export class Menu extends React.Component {
  onPress = () => {
    Alert.alert("You tapped the button");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>NAV 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>NAV 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>NAV 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>CONTACT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 5,
    backgroundColor: '#687684',
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f9fb',
    borderBottomWidth: 1,
  },
  buttonStyles:{
    backgroundColor: '#31708e',
    width: '50%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f7f9fb',
    fontSize: 18,
  },

})
