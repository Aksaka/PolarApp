import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyBenefits from '../Views/MyBenefits';
import MyCards from '../Views/MyCards';
import QRPay from '../Views/QRPay';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
	return(
	<Tab.Navigator>
		<Tab.Screen name="MyBenefits" components={MyBenefits} />
		<Tab.Screen name="QRPay" components={QRPay} />
		<Tab.Screen name="MyCards" components={MyCards} />
	</Tab.Navigator>
	);
};

export default TabNavigation;

