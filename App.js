import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from "./src/pages/login/loginView";
import RegisterView from "./src/pages/login/registerView";
import { Text, View } from 'react-native';
import { TransitionSpecs } from '@react-navigation/stack';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import MainPage from './src/pages/mainPage';
const Stack = createStackNavigator();



function HomeScreen1({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen1</Text>
        </View>
    );
}

function HomeScreen2({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen2</Text>
        </View>
    );
}

function HomeScreen3({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen3</Text>
        </View>
    );
}
window.isLogin = false;

function App() {
    const navigationRef = React.useRef(null);

    const unsubscribe = navigationRef.current?.addListener('state', (e) => {
        // You can get the raw navigation state (partial state object of the root navigator)
        console.log(e.data.state);

        // Or get the full state object with `getRootState()`
        // console.log(navigationRef.current.getRootState());
    });
    // Define multiple groups of screens in objects like this
    const HomeScreens = {
        Home: MainPage,
    };

    const SignScreens = {
        SignIn: LoginView,
        SignUp: RegisterView,
        Home: MainPage,
    };


    if(0){
        return (
            <NavigationContainer>
                <MainPage></MainPage>
            </NavigationContainer>
        )
    }else{
        return (
            <NavigationContainer
                ref={navigationRef}
            >
                <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                >
                    {Object.entries({
                        // Use the screens normally
                        ...SignScreens,
                    }).map(([name, component]) => (
                        <Stack.Screen name={name}   component={component} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }


}

export default App;





