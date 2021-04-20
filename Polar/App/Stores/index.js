import ConfirmStore from "./ConfirmStore";
import UseFetch from './useFetch';
import {createConsumer} from './HomeStore';

const Stores = {
	confirmStore: new ConfirmStore(),
};

export {Stores, UseFetch, createConsumer};