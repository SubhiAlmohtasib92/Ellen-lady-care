import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductDetails, Home } from '../screens';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.purpleColor,
          tabBarInactiveTintColor: colors.greyColor,
          tabBarLabelStyle: {
            fontFamily: 'bold',
            fontSize: 12,
          }
          ,
        })}
      >
        <Tab.Screen
          name='MyProfile'
          component={Home}
          options={{
            tabBarLabel: 'صفحتي',
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={'person-circle-outline'}
                size={30}
                color={focused ? colors.purpleColor : colors.greyColor}
              />;
            }
          }}
        />

        <Tab.Screen
          name='WhishList'
          component={Home}
          options={{
            tabBarLabel: 'قائمة الامنيات',
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={30}
                color={focused ? colors.purpleColor : colors.greyColor}
              />;
            }
          }}
        />

        <Tab.Screen
          name='ShoppingCart'
          component={Home}
          options={{
            tabBarLabel: 'قائمة التسوق',
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={30}
                color={focused ? colors.purpleColor : colors.greyColor}
              />;
            }
          }}
        />

        <Tab.Screen
          name='Categories'
          component={Home}
          options={{
            tabBarLabel: 'الفئات',
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={'apps-sharp'}
                size={30}
                color={focused ? colors.purpleColor : colors.greyColor}
              />;
            }
          }}
        />

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'الرئيسية',
            tabBarBadge: 3,
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={'md-home'}
                size={30}
                color={focused ? colors.purpleColor : colors.greyColor}
              />;
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;