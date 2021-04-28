import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { Provider } from 'mobx-react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './Views/Tabs';
import Stores from './Stores';


const App =() =>{
	return (
		<>
		
			<StatusBar style="auto" />
			
			<Provider {...Stores}>
				<TabNavigation />
			</Provider>
		</>
	);
};

export default App;