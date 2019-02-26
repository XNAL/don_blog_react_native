import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Entypo from 'react-native-vector-icons/Entypo'

import HomeScreen from '../screen/home'
import LaboratoryScreen from '../screen/laboratory'
import AboutScreen from '../screen/about'

// tab导航
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name={ 'home' } size={ 24 } color={ tintColor } />
        )
      }
    },
    Laboratory: {
      screen: LaboratoryScreen,
      navigationOptions: {
        tabBarLabel: '实验室',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name={ 'code' } size={ 24 } color={ tintColor } />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name={ 'user' } size={ 24 } color={ tintColor } />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#2d8cf0', // 选中的颜色
      inactiveTintColor: '#8F8F8F', // 未选中的颜色
      style: {
        backgroundColor: '#f3f3f3',
        height: 54
      },
      tabStyle: {
        height: 54
      },
      labelStyle: {
        fontSize: 14
      }
    }
  }
)

// 设置TabNavigator的头部标题
TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]

  let headerTitle = ''
  switch(routeName) {
    case 'Home':
      headerTitle = '首页'
      break
    case 'Laboratory':
      headerTitle = '实验室'
      break
    case 'About':
      headerTitle = '我的'
      break
  }

  return {
    headerTitle
  }
}

// 导航
const stackNavigator = createStackNavigator(
  {
    Index: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f3f3f3',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer