import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../pages/home'
import LaboratoryScreen from '../pages/laboratory'
import AboutScreen from '../pages/about'

// tab导航
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页'
      }
    },
    Laboratory: {
      screen: LaboratoryScreen,
      navigationOptions: {
        tabBarLabel: '实验室',
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: '我的',
      }
    }
  },
  {
    initialRouteName: 'Home'
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