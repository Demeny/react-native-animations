import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AnimationScreen from '../screens/AnimationScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Animation: { screen: AnimationScreen },
});
