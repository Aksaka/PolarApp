import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './Tabs';


const Router= () => {
	return (
		<NavigationContainer>
			<TabNavigation/>
		</NavigationContainer>
	)
}


export default Router;