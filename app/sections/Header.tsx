import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface State { isLoggedIn: boolean }
interface Props { message: string}

export class Header extends React.Component <Props, State> {
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
    let display = this.state.isLoggedIn ? "Donald Trump" : this.props.message;
    return (
      <View style={styles.headStyle}>
        
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
    fontSize: 20,
    padding: 10,
  },
  headStyle: {
    paddingTop: 40,
    paddingRight: 10,
    backgroundColor: "#8fc1e3",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 2,
    borderColor: 'black',
    alignItems: 'center'
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height: undefined,

  }
});
