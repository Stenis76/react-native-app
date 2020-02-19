import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  render() {
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={ require('./img/bot.jpg')}
        />
          <Text 
          style={styles.headText} 
          onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20
  },
  headStyle: {
    paddingTop: 40,
    paddingRight: 10,
    backgroundColor: "#8fc1e3",
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height: undefined,

  }
});
