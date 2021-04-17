import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './Views/screens/Tab';


const Container = styled.View`
flex: 1;
background-color: #ffffff;
justify-content: center;
align-items: center;
`;

const StyledText = styled.Text`
font-size: 30px;
`;

const App =() =>{
	return (
		<>
			<StatusBar style="auto" />
			<TabNavigation />
		</>
	);
};

export default App;