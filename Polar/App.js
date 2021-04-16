import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'mobx-react';
import Stores from './App/Stores';
import QRCode from 'react-native-qrcode-svg'
import Router from './App/Routes'

class App extends React.Component {

  render() {
    return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
      />
		<Text> WORK???</Text>
      <Provider {...Stores}>
	<Router />
		
      </Provider>
    </>
  );
  }
}

export default App;
