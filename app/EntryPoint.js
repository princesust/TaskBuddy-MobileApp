import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from 'app/navigation';
import store from './store';
import { enableScreens } from 'react-native-screens';
enableScreens();
export default function EntryPoint() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
