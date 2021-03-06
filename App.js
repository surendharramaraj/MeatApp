import React from 'react';
import { StyleSheet, Text, View ,Platform , Dimensions, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/Home';
import ShopDetail from './Home/ShopDetail';
import Summary from './Home/Summary';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store'
import SummaryTwo from './Home/SummaryTwo';
import Address from './Home/Address';
import DeliveryScreen from './Home/DeliveryScreen';
const store = configureStore();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ReduxProvider store={store} >
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      <Stack.Screen name="Summary" component={Summary}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ShopDetail" component={ShopDetail}/>
        <Stack.Screen name="SummaryTwo" component={SummaryTwo}/>
        <Stack.Screen name="Address" component={Address}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
}

