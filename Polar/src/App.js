import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import QRCode from 'react-native-qrcode-svg';
import styled from 'styled-components/native';
import Button from './components/Button';

export default function App() {
	const [name, setName] = useState('');
	const [QRContext, setQRContext] = useState('');
	
	
	useEffect(() =>{
		console.log(`Input: ${name}, QR: ${QRContext}`);
		
	});
	
	return(
		<View style = {styles.container}>
		<StatusBar style="auto"> </StatusBar>
			<Container>
				<Text> Making QR Code </Text>
				
			<StyledText>Input: {name}</StyledText>

			<StyledTextInput value = {name} onChangeText = {text => setName(text)}/>
			<Button title="Generate" onPress= {() => setQRContext(name)}/>
			{QRContext === ''? null:<QRCode value = {QRContext} /> }
				
			</Container>
		</View>
		
	
	);
};

function OnClick(inputs) {
	return 
}



const StyledTextInput = styled.TextInput.attrs({
	autoCapitalize: 'none',
	autoCorrect: false,
})`
border: 1px solid #757575;
padding: 10px;
margin: 10px 0;
width: 200px;
font-size: 20px;
`;
const StyledText = styled.Text`
font-size: 24px;
margin: 10px;
`;

const Container = styled.View`
flex: 1;
background-color: #ffffff;
justify-content: center;
align-items: center;
`

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});