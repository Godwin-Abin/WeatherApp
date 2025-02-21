import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import Home from './src/components/Home';
import Widget from './src/components/Widget';
import Notification from './src/components/Notification';

// Import SVG Icons
import WidgetDark from './src/assets/Icons/widget-dark.svg';
import WidgetLight from './src/assets/Icons/widget-light.svg';
import HomeDark from './src/assets/Icons/home-dark.svg';
import HomeLight from './src/assets/Icons/home-light.svg';
import NotificationLight from './src/assets/Icons/notifications-light.svg';
import NotificationDark from './src/assets/Icons/notifications-dark.svg';

export default function App() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();

  const HomeTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#080745',
          borderColor: '#080745',
          shadowColor: '#080745',
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
              return focused ? <HomeLight width={30} height={30} /> : <HomeDark width={30} height={30} />;
          } else if (route.name === "Widget") {
              return focused ? <WidgetLight width={30} height={30} /> : <WidgetDark width={30} height={30} />;
          } else if (route.name === "Notification") {
              return focused ? <NotificationLight width={30} height={30} /> : <NotificationDark width={30} height={30} />;
          }
        },
        tabBarLabel: '',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Widget" component={Widget} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
