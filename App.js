/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigationRef } from './src/utils/RootNavigation';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState();
  const routeNameRef = useRef();

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer
            linking={linking}
            ref={navigationRef}
            onReady={() => {
              // console.log({
              //   OnReady: navigationRef.current.getCurrentRoute().name,
              // });
              routeNameRef.current =
                navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName =
                navigationRef.current.getCurrentRoute().name;
              console.log({previousRouteName,currentRouteName});
              // if (previousRouteName !== currentRouteName) {
              //   await analytics().logScreenView({
              //     screen_name: currentRouteName,
              //     screen_class: currentRouteName,
              //   });
              // }
              routeNameRef.current = currentRouteName;
            }}>
              <Stack.Navigator initialRouteName={initialRouteName}>
            <View>
              <Text>App</Text>
            </View>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
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
