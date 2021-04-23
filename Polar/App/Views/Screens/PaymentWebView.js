import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import MyButton from '../Components/Button';
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';

export const PaymentWebView = Data => {
	return(
			 <WebView source={{ uri: "https://www.naver.com/" }} />
   
	)
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;


export default PaymentWebView;
