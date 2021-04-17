import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyCards, QRPay} from './TabScreens';

import MyBenefits from '../MyBenefits';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
	return(
	<NavigationContainer>
	<Tab.Navigator>
		<Tab.Screen name = "MyBenefits" component={MyBenefits} />
		<Tab.Screen name = "MyCards" component={MyCards} />
		<Tab.Screen name = "QRPay" component={QRPay} />
	</Tab.Navigator>
	</NavigationContainer>
	);
};

export default TabNavigation;