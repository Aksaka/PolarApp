import React, {useState, useEffect} from 'react';
import IMP from 'iamport-react-native';
import {StatusBar} from 'expo-status-bar';

import MyButton from '../../Components/Button';
import Loading from './Loading';
import IamPortCode from '../../../Assets/Constants';


const Data = {
    pg: 'html5_inicis',
    pay_method: 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: "20210426",
    amount: '500',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'example',
	escrow: false,
    // [Deprecated v1.0.3]: m_redirect_url
  };

export const PaymentWebView = ({ route, navigation }) =>{
	const payData = route.params;
	
	console.log(`Data: ${JSON.stringify(payData)}`);
	console.log(`Id: ${payData[0].consumerId}`);
	return (
		 <IMP.Payment
      userCode={'imp10391932'}
      loading={<Loading />}
      data={Data}
      callback={response => navigation.replace('PaymentResult', response )}
    />
	)
}
export default PaymentWebView;