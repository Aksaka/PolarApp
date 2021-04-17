import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const StyledText = styled.Text`
font-size: 30px;
`;

export const MyBenefits = () => {
	return(
	<Container>
		<StyledText>MyBenefits</StyledText>
	</Container>
	);
};

export const MyCards = () =>{
	return(
	<Container>
		<StyledText>MyCards</StyledText>
	</Container>
	);
};

export const QRPay = () =>{
	return(
	<Container>
		<StyledText>QRPay</StyledText>
	</Container>
	);
};