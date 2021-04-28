import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../Common/colors';

const MyButton = props =>{
	return (
	<TouchableOpacity 
			style={{
				backgroundColor: colors.Polarblue,
				padding: 16,
				margin: 10,
				borderRadius: 8, }}
			onPress = {()=>props.onPress()}>
		<Text style = {{color: 'white', fontSize: 20}}>{props.title || "Button"}</Text>
	</TouchableOpacity>
	);
};

export default MyButton;