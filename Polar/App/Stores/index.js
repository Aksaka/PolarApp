import HomeStore from "./HomeStore";
import ConfirmStore from "./ConfirmStore";

const Stores = {
	homeStore: new HomeStore(),
	confirmStore: new ConfirmStore(),
};

export default Stores;