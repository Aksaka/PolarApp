import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg';
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import CommonStyles from '../Common/styles';
import MyButton from '../Components/Button';

const StyledText = styled.Text`
font-size: 30px;
`;




@inject("homeStore", "confirmStore") @observer
class QRPay extends React.Component {
	componentDidMount(){
		const { getConsumerId, loadConsumerInfo, createConsumer } = this.props.homeStore;
		getConsumerId().then(res => {
			return loadConsumerInfo(res);
		}, reason => {
			if(reason == "CONSUMERID_MISSING"){
				return createConsumer();
			}
		}).catch(error => {
			if(error){
				console.log(error);
			}
		});
	}

	render() {
		const {consumerId, isLoading, isConsumerIdLoaded} = this.props.homeStore;
		
		function requestPayment() {
			
		}
		
		return (
			<Container>
				{isConsumerIdLoaded? <StyledText> Consumer Id: {String(consumerId)} </StyledText> : <Text> Consumer Id is Loading now...</Text>}
				<Text> </Text>
				{isConsumerIdLoaded? <QRCode value = {String(consumerId)} /> : <Text> QR code is Loading Now...</Text>}
				<Text>  </Text>
				<MyButton title = "Testing" onPress= {() => console.log(`ID: ${consumerId}, isLoading: ${isLoading}`)}/> 
				<MyButton title = "Payment" onPress = {() => requestPayment()} />
				
			</Container>
		);
	};
	
	
}



const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#ddd',
        justifyContent: 'space-around',
    },
        titleText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
        },
        sellerIdText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
        },
});

export default QRPay;