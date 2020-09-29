import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { Person, useCredentialsStore } from './state';
import { Icon, IconName } from './ds/Icon';
import { SignInScreen } from './SignInScreen';
import { SettingsScreen } from './SettingsScreen';

enableScreens();

export type RootStackParamList = {
  Home: undefined;
  Details: {
    employee: Person;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<{
  Home: undefined;
  Settings: undefined;
}>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerLargeTitle: true }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'User list' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.employee.name })}
      />
    </Stack.Navigator>
  );
}

const SignOutStack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IconName.list : IconName.list;
          } else if (route.name === 'Settings') {
            iconName = focused ? IconName.settings : IconName.settings;
          } else {
            iconName = IconName.list;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export function App() {
  const user = useCredentialsStore(
    React.useCallback((state) => state.user, []),
  );

  return (
    <NavigationContainer>
      {user ? (
        Tabs()
      ) : (
        <SignOutStack.Navigator>
          <SignOutStack.Screen name="Sign in" component={SignInScreen} />
        </SignOutStack.Navigator>
      )}
    </NavigationContainer>
  );
}
