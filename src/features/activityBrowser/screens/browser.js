import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';

export default  class Browser extends React.Component {
  static navigationOptions = {
    title: 'You have signed in',
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Yay!</Text>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
// More code like OtherScreen omitted for brevity