import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon, Button, Text } from 'native-base';
import { SafeAreaView, StyleSheet, Modal, Dimensions} from 'react-native';
import styled from 'styled-components/native'

import MyButton from '../../Components/Button';
import {createConsumer, getPaymentInfo, useFetch} from '../../../Stores';

export const PaymentInfo = ({ route, navigation }) =>{
	const consumerId = route.params.consumerId;
	
	const Data = getPaymentInfo(consumerId);
	return (
		<Container>
			
			{Data? <Text> 결제 번호: {Data[0].id} </Text> : <Text> </Text>}
			{Data? <Text>  가격 : {Data[0].price} </Text> : <Text> </Text>}
			{Data? <Text> 매장 ID : {Data[0].sellerId} </Text> : <Text> 결제 정보가 없습니다. </Text>}
			{Data? <Text> 소비자 ID : {Data[0].consumerId} </Text> : <Text>  </Text>}
			{Data? <Text> 요청 시각: {Data[0].createdAt} </Text> : <Text>  </Text>}
			
			<MyButton title = "결제" onPress = {() => navigation.navigate("PaymentWebView", Data)} />
			<MyButton title = "닫기" onPress = {() => navigation.goBack()} />
		</Container>
	)
};


const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export default  PaymentInfo;