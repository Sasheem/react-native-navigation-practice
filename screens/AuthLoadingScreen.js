import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

class AuthLoadingScreen extends Component {

  constructor() {
    super();
    this.loadApp();
  }

  // check if user's token is available in local storage or not
  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');  // assume we call it user token

    // if userToken is available then navigate user to App, to Auth screen if not
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
