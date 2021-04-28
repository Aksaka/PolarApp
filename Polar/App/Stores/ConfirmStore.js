import {observable, action} from 'mobx';
import React, {useState, useEffect} from 'react';

import {apiUrl} from '../Assets/Constants';

class ConfirmStore{
	@observable isLoading = false;
	@observable paymentState = 0;
	@observable payment = null;
	@observable price = 0;
	@observable sellerId = 0;
	@observable merchantId = 0;
	@observable cardId = 0;
	@observable cardProperty = null;
	@observable Error = null;
	@observable Data = null;

	@action setPaymentState = paymentState =>{
		this.paymentState = paymentState;
	}
	
	@action getPaymentInfo = async(consumerId) => {
		this.isLoading = true;
		let queryParams = `?consumerId=${consumerId}`;
		
		
		
		this.isLoading = false;
	}
	
	@action refreshPaymentRequest = async(consumerId) => {
		this.isLoading = true;
		let queryParams = `?consumerId=${consumerId}`;
		return fetch(`${apiUrl}api/polar/payment${queryParams}`, {
			method: "GET"
		}).then(res => {
			if(res.ok && res.status === 200){
				return res.json();
			}
			else{
				return Promise.reject(new Error("paymentRequest Load에 실패했습니다."));
			}
		}).then(res => {
			if(res.length > 0){
				this.paymentState = res[0].state;
				this.isLoading = false;
				return Promise.resolve(res[0]);
			}
			else{
				this.createConsumer();
			}
		}).catch(error => {
			this.isLoading = false;
			if(error){
				console.log(error);
			}
		});
		
	};
	
};

export default ConfirmStore;