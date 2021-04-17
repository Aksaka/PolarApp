import React from 'react';
import styled from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg';
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import CommonStyles from '../Common/styles';
import MyButton from '../Components/Button';

const StyledText = styled.Text`
font-size: 30px;
`;



@inject("homeStore") @observer
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
		const {consumerId, isLoading} = this.props.homeStore;
		return (
			<Container>
				<StyledText> Consumer Id: {String(consumerId)} </StyledText>
				<Text> </Text>
				<QRCode value = {String(consumerId)} />
				<Text>  </Text>
				<MyButton title = "Payments" onPress={() => console.log(`Id: ${consumerId}`)}/>
				
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