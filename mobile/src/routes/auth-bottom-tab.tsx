import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Config } from "../Config/tab";
import Category from "../pages/Category";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import { View } from "react-native";


const Tab = createBottomTabNavigator();

export function AuthBottomTab() {
  return (
    <Tab.Navigator

      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#463EC9',
        tabBarInactiveTintColor: '#777',
        tabBarShowLabel: false,
      }}

    >
      <Tab.Screen name='Home' component={Home} options={Config.HomeIcon} />
      <Tab.Screen name='Category' component={Category} options={Config.GridIcon} />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={Config.NewPostIcon}
      // options={{
      //   tabBarIcon: () => {
      //     return <View />
      //   }
      // }}
      />
      <Tab.Screen name='Favorites' component={Favorites} options={Config.FavoriteIcon} />
      <Tab.Screen name='Profile' component={Profile} options={Config.ProfileIcon} />
    </Tab.Navigator>
  );
}