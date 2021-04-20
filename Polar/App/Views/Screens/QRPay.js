import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg';
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import CommonStyles from '../Common/styles';
import MyButton from '../Components/Button';

import {createConsumer} from '../../Stores';

const StyledText = styled.Text`
font-size: 30px;
`;


const QRPay = () =>{
	
	createConsumer()
	return (
			<Container>
				<Text> !! </Text>
			</Container>
	);
	
};


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