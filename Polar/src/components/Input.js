import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

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

const Form = () =>{
	const [name, setName] = useState('');
	
	useEffect(() =>{
		console.log('Input: ${name}\n');
	});
	return(
		<>
		<StyledText>Input: {name}</StyledText>
		
		<StyledTextInput value = {name} onChangeText = {text => setName(text)}/>
		</>
	)
}

export default Form;