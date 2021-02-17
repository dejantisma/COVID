import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import World from './World';
import USAStack from './USAStack';
import WorldStack from './WorldStack';

export default function App() {
  enableScreens();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon:({color,size}) =>{
            let iconName;
            if(route.name == 'World'){
              iconName = 'ios-globe';
            }else if(route.name=='USA'){
              iconName = 'ios-flag';
            }

            return <Ionicons name={iconName} size={size} color={color}/>;

          }
    
        })}>
        <Tab.Screen name="World" component={WorldStack} />
        <Tab.Screen name="USA" component={USAStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

