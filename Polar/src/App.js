import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import QRCode from 'react-native-qrcode-svg';
import styled from 'styled-components/native';
import Dog from './components/Dog'


export default function App() {
	return(
		
		<Container>
			<Dog />
		</Container>
		
	
	);
};



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Container = styled.TouchableOpacity`
background-color: #3498db;
border-radius: 15px;
padding: 15px 30px;
margin: 10px 0px;
justify-content: center;
`