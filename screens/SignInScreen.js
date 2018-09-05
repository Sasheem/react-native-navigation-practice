import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';

class SignInScreen extends Component {

  signIn = async() => {
    await AsyncStorage.setItem('userToken', 'sasheem');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Complete Log In" onPress={this.signIn} />
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
