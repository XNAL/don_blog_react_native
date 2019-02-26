import React from 'react'
import { View, Text } from 'react-native'

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text>About Screen</Text>
      </View>
    )
  }
}