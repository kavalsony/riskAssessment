import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/homeScreen/HomeScreen';
import Results from '../screens/resultsScreen/ResultsScreen';
import {RootStackParamList} from '../types/NavigationProps';
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
        {/* You can add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
