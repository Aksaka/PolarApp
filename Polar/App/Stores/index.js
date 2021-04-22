import ConfirmStore from "./ConfirmStore";
import UseFetch from './useFetch';
import {createConsumer, getConsumerId, getPaymentInfo} from './HomeStore';

const Stores = {
	confirmStore: new ConfirmStore(),
};

export {Stores, UseFetch, createConsumer, getConsumerId, getPaymentInfo};