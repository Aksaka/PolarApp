import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyBenefits from './Screens/MyBenefits';
import MyCards from './Screens/MyCards';
import PayStack from './Screens/PayStack';

const Tab = createBottomTabNavigator();


const TabNavigation = () =>{
	return(
	<NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen name = "MyBenefits" component={MyBenefits} />
			<Tab.Screen name = "QRPay" component = {PayStack} />
			<Tab.Screen name = "MyCards" component={MyCards} />
		</Tab.Navigator>
	</NavigationContainer>
	);
};

export default TabNavigation;