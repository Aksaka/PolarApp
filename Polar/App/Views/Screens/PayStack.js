import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import QRPay from './PayStack/QRPay';
import PaymentWebView from './PayStack/PaymentWebView';
import PaymentResult from './PayStack/PaymentResult'
import PaymentInfo from './PayStack/PaymentInfo'
const Stack = createStackNavigator();


export const PayStack = () =>{
	return (
		<Stack.Navigator initialRouteName="QRPay">
			<Stack.Screen name = "QRPay" component = {QRPay} options={{headerShown: false}} />
			<Stack.Screen name = "PaymentInfo" component = {PaymentInfo} options = {{headerShown : false}} />
			<Stack.Screen name = "PaymentWebView" component = {PaymentWebView} options={{headerShown: false}} />
			<Stack.Screen name = "PaymentResult" component = {PaymentResult} options = {{headerShown: false}} />
		</Stack.Navigator>
	)
}
export default PayStack;