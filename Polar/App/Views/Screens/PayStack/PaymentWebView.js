import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import { observer, inject } from "mobx-react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';
import IMP from 'iamport-react-native';
import {StatusBar} from 'expo-status-bar';

import MyButton from '../../Components/Button';
import Loading from './Loading';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export function Payment({ navigation }) {
  /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
  function callback(response) {
    navigation.replace('PaymentResult', response);
  }

  /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
  const data = {
    pg: 'html5_inicis',
    pay_method: 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: "123454",
    amount: '500',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'example',
    // [Deprecated v1.0.3]: m_redirect_url
  };

  return (
    <IMP.Payment
      userCode={'imp80973478'}  // 가맹점 식별코드
      tierCode={'AAA'}      // 티어 코드: agency 기능 사용자에 한함
      loading={<Loading />} // 웹뷰 로딩 컴포넌트
      data={Data}           // 결제 데이터
      callback={callback}   // 결제 종료 후 콜백
    />
  );
}

const Data = {
    pg: 'html5_inicis',
    pay_method: 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: "123454",
    amount: '500',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'example',
    // [Deprecated v1.0.3]: m_redirect_url
  };

export const PaymentWebView = ({navigation}) =>{
	return (
		 <IMP.Payment
      userCode={getUserCode(pg)}
      loading={<Loading />}
      data={Data}
      callback={response => navigation.replace('PaymentResult', { response })}
    />
	)
}
export default PaymentWebView;