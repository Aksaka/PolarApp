import React from 'react';
import styled from 'styled-components/native'
import Container from './Common/Container'

const StyledText = styled.Text`
font-size: 30px;
`;

const QRPay =() =>{
	return(
	<Container>
		<StyledText>QRPay</StyledText>
	</Container>
	)
}

export default QRPay;