import React from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import MyButton from '../Components/Button';

export const PaymentWebView = Data => {
	return(
		<Container>
			<Text> Payment Web View </Text>
		</Container>
	)
}


export default PaymentWebView;


const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
