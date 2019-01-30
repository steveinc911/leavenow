import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Image,
} from 'react-native';

import Button from 'app/components/button'
import {RkButton, RkTextInput} from 'react-native-ui-kitten';
import TextInput from 'app/components/textInput'


import Svg, { G, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */


export default  class SignIn extends React.Component {
   constructor(props) {
     super(props)

     this.state = {
       username: '',
       password: '',
     }
   }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          Leave Now
        </Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder = 'Email'
          keyboardType = 'email-address'
        />
        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder = 'Password'
          secureTextEntry  = {true}
        />
        

        <RkButton 
          style={{
            marginBottom: 10,
          }}
          title="Sign In"
          onPress={this._signInAsync}
        >
          Sign In
        </RkButton>
        <View>
          <Text>

          </Text>
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 71,
    color: '#6C611F',
    fontSize: 22,
  },
  btnSignIn: {
    marginBottom: 190,
  }
})
// More code like OtherScreen omitted for brevity