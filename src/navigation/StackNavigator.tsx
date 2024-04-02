import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/HomeScreen/HomeScreen';
import Results from '../screens/ResultsScreen/ResultsScreen';
import {RootStackParamList} from '../types';
// Stack Navigator for our apps

function AppStack(): React.JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{
            title: 'Result',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
