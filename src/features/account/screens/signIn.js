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

const SvgComponent = props => (
  <Svg width={126} height={88} {...props}>
    <G>
      <Path
        fill="#6C611F"
        d="M14.718 43.193V27.826s.545-14.718 15.263-14.718h30.528L45.517.025h-12.81S0-1.746 0 24.548v63.787h14.718V57.262h29.437V44.18H14.718z"
      />
      <Path
        fill="#6C611F"
        d="M94.812 35.872h16.132l15.058 23.136-19.328 27.582s-8.064.927-12.486.927q-20.353 0-32.086-11.264T50.368 45.228q0-19.879 12.825-32.408T97.302.293a69.281 69.281 0 0 1 23.646 3.706v17.82q-9.761-5.647-23.881-5.645-11.821 0-19.261 7.675a32.6 32.6 0 0 0-8.713 21.913c0 8.669 2.873 14.628 7.948 18.7 4.726 3.788 14.185 6.509 20.467 7.029l7.7-13.063"
      />
    </G>
  </Svg>
)

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

        <SvgComponent style={styles.logo} />
        
        <RkTextInput
           rkType='rounded'
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
    backgroundColor: '#FFDA00',
    paddingTop: 100,
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 71,
    color: '#6C611F',
  },
  btnSignIn: {
    marginBottom: 190,
  }
})
// More code like OtherScreen omitted for brevity