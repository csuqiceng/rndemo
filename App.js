import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from "./src/pages/login/loginView";
import RegisterView from "./src/pages/login/registerView";
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import MainPage from './src/pages/mainPage';
const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.DefaultTransition,
        }}

        mode="modal"
      >
        <Stack.Screen name="Login"
          options={{
            headerTitle: true,
          }} component={LoginView} />
        <Stack.Screen name="register" component={RegisterView} />
        <Stack.Screen name="mainPage"
        options={{
          headerTitle: true,
        }}
         component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



