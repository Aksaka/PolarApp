import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg';
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet,Modal, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CommonStyles from '../Common/styles';
import MyButton from '../Components/Button';

import {createConsumer, getPaymentInfo} from '../../Stores';

const StyledText = styled.Text`
font-size: 30px;
`;

const QRPay = () =>{
	
	const [consumerId,consumerIdSet] = useState('Loding now');
	var ConsumerId = null;
	
	const result = AsyncStorage.getItem('consumerId').then(res => {
            if(res) {
				consumerIdSet(res);
                return Promise.resolve(consumerId);
            } else {
				createConsumer();
                return Promise.reject("SELLERID_MISSING");
            }
        }, error => {
            console.log(error);
        }
		
	);
	
	const Data = getPaymentInfo(String(consumerId));
	const [ShowPopup, setShowPopup]= useState(false);
	console.log(`consumerId: ${consumerId}`)
	
	return (
			
			<Container>
				<StyledText> Consumer Id : {String(consumerId)}</StyledText>
				<Text> </Text>
				<QRCode value = {String(consumerId)} />
				<Text> </Text>
				{Data ? <MyButton title = "결제정보 확인" onPress = {() => alert( `결제 번호: ${Data[0].id}\n 가격: ${Data[0].price} \n 매장ID: ${Data[0].sellerId} \n 소비자 ID: ${Data[0].consumerId} \n 결제요청시간: ${Data[0].createdAt}`)}  /> : <MyButton title = "No Payment Info" /> }
				<MyButton title = "Testing" onPress = {() => setShowPopup(true) }/>
				
			</Container>
	);
	
};



function useFetch(URL, METHOD) {
	const [data, setData] = useState(null);
	const [error, setError]= useState(null);
	const [inProgress, setinProgress] = useState(false);
	useEffect( () => {
		const fetchData = async () => {
			try{
				setinProgress(true);
				const res = await fetch(URL, {method: METHOD});
				const result = await res.json();
				
				if(res.ok){
					setData(result);
					setError(null);
				}
				else{
					throw result;
				}
			}
			catch(error){
				setError(error);
			}
			finally{
				setinProgress(false);
			}
		};
	fetchData();
	}, [])
	return {data, error, inProgress};
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