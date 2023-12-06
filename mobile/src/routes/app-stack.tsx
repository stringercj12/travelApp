import react from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailPost from '../pages/DetailPost';
import Follows from '../pages/Follows';
import Forgot from '../pages/Forgot';
import Hotels from '../pages/Hotels';
import Login from '../pages/Login';
import Post from '../pages/Post';
import Register from '../pages/Register';
import Start from '../pages/Start';
import VerificationCode from '../pages/VerificationCode';
import { AuthDrawer } from './auth-drawer';
import { AuthBottomTab } from './auth-bottom-tab';


const Stack = createNativeStackNavigator();


export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Start"
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <StatusBar backgroundColor="transparent"/> */}
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="DetailPost" component={DetailPost} options={{ headerShown: false }} />
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
      <Stack.Screen name="Follows" component={Follows} options={{ headerShown: false }} />
      <Stack.Screen name="Hotels" component={Hotels} options={{ headerShown: false }} />

      <Stack.Screen name="MyDrawer" component={AuthDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={AuthBottomTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}