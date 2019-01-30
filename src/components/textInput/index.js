import React from 'react';
import {
  TextInput,
} from 'react-native';
export default  class CustomTextInput extends React.Component {
    render() {
        const {
            style={}, 
            placeholder, 
            onChangeText,
            value,
            textContentType,
            keyboardType,
            secureTextEntry,
        } = this.props

        return <TextInput
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: 5,
            width: '80%',
            marginBottom: 5,
            ...style,
            }}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize = 'none'
            placeholder = {placeholder}
            placeholderTextColor = 'rgba(0,0,0,0.3)'
            textContentType = {textContentType}
            keyboardType = {keyboardType}
            secureTextEntry = {secureTextEntry}
        />
    }
}