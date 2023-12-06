import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../pages/Settings";


const Drawer = createDrawerNavigator();

export function AuthDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Settings">
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
}