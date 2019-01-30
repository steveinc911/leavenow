import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
export default  class Button extends React.Component {
    render() {
        const { color='#000', textColor='#fff', onPress, style, title } = this.props

        return <TouchableOpacity 
        onPress={onPress}
        activeOpacity={1}
        style={{
            width: 200,
            height: 50,
            backgroundColor: color,
            alignItems: 'center', 
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#000',
            opacity: 0.8,
            ...style,
        }}
      >
        <Text
            style={{
                color: textColor,
            }}
        >
        {title}
        </Text>
      </TouchableOpacity>
    }
}