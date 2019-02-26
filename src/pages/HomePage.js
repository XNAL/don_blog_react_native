import React from 'react'
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Other"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const stackNavigator = createStackNavigator(
  {
    A: HomeScreen,
    B: {
      screen: HomeScreen,
      navigationOptions: {
        title: '其他',
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // }
      }
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Stack: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: {
          title: '11111'
        },
        tabBarLabel: '实验室',
        title: '首页',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        tabBarLabel: '我的',
      }
    }
  },
  {
    initialRouteName: 'Home',
    initialRouteParams: {title: 'Net'}, // 找这条命令不容易, 翻github翻了一个小时
  }
)

export default TabNavigator