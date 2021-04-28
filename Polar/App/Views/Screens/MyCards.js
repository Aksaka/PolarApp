import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components/native'
import {StyleSheet, Text, View, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import Container from '../Common/Container';
import {colors} from '../Common/colors';
import MyButton from '../Components/Button';
let WooriCard = require('../../Assets/Image/AKWooriCard.png');
let KBCard = require('../../Assets/Image/KBCard.png');
let SinhanCard = require('../../Assets/Image/SinhanCard.png');

const StyledText = styled.Text`
font-size: 30px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // 혹은 'column'
	backgroundColor : colors.Polarblue,
	  justifyContent: 'center',
	  alignItems: 'center',
  },
  item1: {
    flex: 1,
    backgroundColor: 'white',
	  justifyContent: 'center',
  }, Title: {
	flex: 0.3,
    backgroundColor: 'white',
	  justifyContent: 'center',
	  alignItems: 'center',
}
});


const MyCards =() =>{
	
	const [nthCard, setNthCard] = useState(0);
	const CardArray = [{
			Id : 0,
			CardImage: WooriCard,
			CardName: "우리 카드",
	}, {
			Id : 1,
			CardImage : KBCard,
			CardName: "KB 국민 카드"
	}, {
			Id : 2,
			CardImage : SinhanCard,
			CardName : "신한 카드",
		}];
	
	
	return(
		<>
			<StatusBar style="auto" />
		
			<View style = {styles.Title}>
			</View>
		
      		<View style={styles.container}>
				<MyButton title = "<" onPress = {() => setNthCard((nthCard+CardArray.length-1)%CardArray.length)}/>
				<Image style={{height:'50%',width:'50%',resizeMode:'contain'}}
  					source={CardArray[nthCard].CardImage} />
				<MyButton title = ">" onPress = {() => setNthCard((nthCard+1)%CardArray.length)}/>
  					
      		</View>
			
			<View style={styles.item1}>
				<Text> 카드 이름 : {CardArray[nthCard].CardName}</Text>
				<Text> 카드 혜택 :  </Text>
			</View>
		</>
	)
}

export default MyCards;