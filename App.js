import {
  View,
  Text,
} from 'react-native';
import React from 'react';
 import Home from './src/components/Home';
import { Provider } from 'react-redux';
import store from './src/redux/store';



const App = () => {
  return (
    <Provider store={store}>
        <View style={{flex:1}}>
    

      <Home/>
    </View>
     </Provider>
    
  );
};

export default App;
