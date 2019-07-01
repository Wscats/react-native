
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import DetailsScreen from './src/components/DetailsScreen/DetailsScreen'
import HomeScreen from './src/components/HomeScreen/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Details',
});

export default createAppContainer(AppNavigator);