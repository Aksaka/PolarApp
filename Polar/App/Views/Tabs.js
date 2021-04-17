import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyBenefits from './Screens/MyBenefits';
import MyCards from './Screens/MyCards';
import QRPay from './Screens/QRPay';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
	return(
	<NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen name = "MyBenefits" component={MyBenefits} />
			<Tab.Screen name = "QRPay" component={QRPay} />
			<Tab.Screen name = "MyCards" component={MyCards} />
		</Tab.Navigator>
	</NavigationContainer>
	);
};

export default TabNavigation;