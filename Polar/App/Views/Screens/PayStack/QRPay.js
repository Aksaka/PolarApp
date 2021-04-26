import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg';
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';

import MyButton from '../../Components/Button';

import {createConsumer, getPaymentInfo, useFetch} from '../../../Stores';
let Polar_logo = require('../../../Assets/Image/Polar_Logo.png');

const StyledText = styled.Text`
font-size: 30px;
`;

const QRPay = ({navigation}) =>{
	
	const [consumerId,setConsumerId] = useState('Loading now');
	//const [Data, setData] = useState(null)
	
	const result = AsyncStorage.getItem('consumerId').then(res => {
            if(res) {
				setConsumerId(res);
                return Promise.resolve(consumerId);
            } else {
				createConsumer();
                return Promise.reject("SELLERID_MISSING");
            }
        }, error => {
            console.log(error);
        }
		
	);
	
	//var Data = null;
	const [ShowPopup, setShowPopup]= useState(false);
	const [ShowWebView, setShowWebView] = useState(false);
	return (
			
			<Container>
				<StyledText> Consumer Id : {String(consumerId)}</StyledText>
				<Text> </Text>
				<QRCode value = {String(consumerId)} logo={Polar_logo} logoSize={45} size = {150}/>
				<Text> </Text>
				<Text> </Text>
				<Text> </Text>
				<MyButton title = "결제정보 확인" onPress = {() => navigation.navigate( "PaymentInfo", {consumerId})}  /> 
        		
				
			</Container>
	);
	
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  modal: {
    width: "80%",
    height: "20%"
  }
});



const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;


export default QRPay;