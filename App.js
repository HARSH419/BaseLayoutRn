/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux';


const App = () => {
  const [initialRouteName, setInitialRouteName] = useState();
  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content" />
      <View>
        <Text>App</Text>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
