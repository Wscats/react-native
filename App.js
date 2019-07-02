
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json

import DetailsScreen from './src/components/DetailsScreen/DetailsScreen'
import HomeScreen from './src/components/HomeScreen/HomeScreen'
import MineScreen from './src/components/MineScreen/MineScreen'


const MineNavigator = createStackNavigator({
  Mine: {
    screen: MineScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Mine',
  });

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
  });

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Mine: MineNavigator,
}, {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
export default createAppContainer(TabNavigator);