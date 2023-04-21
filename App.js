import * as React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Components */
import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';

/* Store */
import store from './src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Expense tracker',
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddTransaction}
            options={{title: 'Add expense'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;