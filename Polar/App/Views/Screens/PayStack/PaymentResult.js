import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon, Button, Text } from 'native-base';
import { SafeAreaView, StyleSheet, Modal, Dimensions} from 'react-native';
import styled from 'styled-components/native'

import MyButton from '../../Components/Button';

export default function PaymentResult({ route, navigation }) {
  const response = route.params;
	console.log(response);
  const { imp_success, success, imp_uid, merchant_uid, error_msg } = response;
  const { wrapper, title, listContainer, list, label, value } = resultStyles;
  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(imp_success === 'false' || imp_success === false || success === 'false' || success === false);
  const { icon, btn, btnText, btnIcon } = isSuccess ? resultSuccessStyles : resultFailureStyles;

  return (
	  <Container>
	  	 <Text> End! </Text>
		 <Text> </Text>
		 <MyButton title = "돌아가기" onPress = {() => navigation.popToTop()} />
	  </Container>
  );
}


const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const resultStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    width: '90%',
    marginBottom: 50,
  },
  list: {
    borderBottomWidth: 0,
    marginTop: -10,
    marginBottom: -10,
  },
  label: {
    width: '40%',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  value: {
    width: '60%',
  },
  btn: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: -20,
  },
});

const resultSuccessStyles = StyleSheet.create({
  icon: {
    ...resultStyles.icon,
    color: '#52c41a',
  },
  btn: {
    ...resultStyles.btn,
    borderColor: '#52c41a',
  },
  btnText: {
    color: '#52c41a',
  },
  btnIcon: {
    color: '#52c41a',
  },
});

const resultFailureStyles = StyleSheet.create({
  icon: {
    ...resultStyles.icon,
    color: '#f5222d',
  },
  btn: {
    ...resultStyles.btn,
    borderColor: '#f5222d',
  },
  btnText: {
    ...resultStyles.btnText,
    color: '#f5222d',
  },
  btnIcon: {
    color: '#f5222d',
  },
});