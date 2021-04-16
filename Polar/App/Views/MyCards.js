import React from 'react';
import styled from 'styled-components/native'
import Container from './Common/Container'

const StyledText = styled.Text`
font-size: 30px;
`;

const MyCards =() =>{
	return(
	<Container>
		<StyledText>My Cards</StyledText>
	</Container>
	)
}

export default MyCards;