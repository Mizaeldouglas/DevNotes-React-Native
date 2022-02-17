
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import MainStack from './src/stacks/MainStack';
import 'react-native-gesture-handler';

import { store, persistor } from './src/store'

export default function App() {
  return (
	<Provider store={store} >
		<PersistGate loading={null} persistor={persistor}>
			<NavigationContainer  >
				<MainStack />
			</NavigationContainer>
		</PersistGate>
	</Provider>
  );
}

