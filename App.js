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
import React, {useState, useRef} from 'react';
import {Provider} from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './src/utils/RootNavigation';
import GetStarted from './src/screens/GetStarted';
import Drawer from './src/screens/Drawer';
import {store} from './src/store';
import {normalize} from './src/utils/helper';
import {LatoBold, LatoRegular} from './src/constants/fonts';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'lightgreen'}}
      // contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontWeight: 'normal',
        fontFamily: LatoBold,
        fontSize: normalize(19),
      }}
      text2Style={{
        fontSize: normalize(17),
        fontFamily: LatoRegular,
        marginBottom: 10,
        paddingBottom: 10,
      }}
      text2NumberOfLines={5}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontWeight: 'normal',
        fontFamily: LatoBold,
        fontSize: normalize(19),
      }}
      text2Style={{
        fontSize: normalize(17),
        fontFamily: LatoRegular,
        marginBottom: 10,
        paddingBottom: 10,
      }}
      text2NumberOfLines={5}
    />
  ),
};

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState('drawer');
  const routeNameRef = useRef();

  const Stack = createStackNavigator();

  // const hideSplash = async () => {
  //   try {
  //     SplashScreen.hide();
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // async function isUserAlreadyLoggedIn() {
  //   try {
  //     const session = await EncryptedStorage.getItem('isLoggedIn');
  //     if (session && session == 'true') {
  //       console.log({ session }, 'if');
  //       return true;
  //       // Congrats! You've just retrieved your first value!
  //     } else {
  //       console.log({ session }, 'else');
  //       return false;
  //     }
  //     // isLoggedIn === 'true' ? setInitialRouteName('AddressBook') : setInitialRouteName('Login');
  //   } catch (error) {
  //     console.log({ errorhhh: error });
  //     return false;
  //   }
  // }

  // useEffect(() => {
  // (async () => {
  //   let value = await isUserAlreadyLoggedIn();
  //   await fetchEnv();
  //   await messaging().requestPermission();
  //   await messaging().registerDeviceForRemoteMessages();
  //   messaging()
  //     .getInitialNotification()
  //     .then((remoteMessage) => {
  //       console.log('getInitialNotification', { remoteMessage });
  //       if (value) {
  //         //wait for Home screen to load
  //         setInitialRouteName('Home');
  //         if (remoteMessage?.data?.FormId) {
  //           setTimeout(() => {
  //             navigationRef?.navigate('ScreenQuestions', {
  //               appointmentDetails: {
  //                 ...remoteMessage?.data,
  //               },
  //             });
  //           }, 1000);
  //         }
  //       } else setInitialRouteName('Login');
  //       hideSplash();
  //     });
  //   const firebaseToken = await messaging().getToken();
  //   console.log(firebaseToken, 'firebaseToken');

  // })();

  // const unsubscribe = messaging().onMessage((notification) => {
  //   console.log({ notification }, 'notification');
  //   localNotification(notification);
  // });

  // return unsubscribe;
  //   hideSplash();

  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const value = await isUserAlreadyLoggedIn();
  //     notifee.getChannels().then((channel) => {
  //       console.log({ channel });
  //     });
  //     notifee.getInitialNotification().then((remoteMessage) => {
  //       console.log('getInitialNotification', { remoteMessage });
  //       if (remoteMessage?.notification?.data?.FormId && value) {
  //         //wait for Home screen to load
  //         setTimeout(() => {
  //           navigationRef?.navigate('ScreenQuestions', {
  //             appointmentDetails: {
  //               ...remoteMessage?.notification?.data,
  //             },
  //           });
  //         }, 1000);
  //       }
  //     });
  //   })();
  // }, []);

  // const createDefaultChannel = async () => {
  //   return await notifee.createChannel({
  //     id: defaultNotificationChannel,
  //     name: 'Default Channel',
  //     importance: AndroidImportance.HIGH,
  //     visibility: AndroidVisibility.PUBLIC,
  //   });
  // };

  // const localNotification = async ({ notification, data }) => {
  //   const channelId = await createDefaultChannel();
  //   await notifee.displayNotification({
  //     title: notification?.title,
  //     body: notification?.body,
  //     id: moment().unix().toString(),
  //     data: data,
  //     subtitle: 'HYDROLOGY',
  //     android: {
  //       channelId,
  //       smallIcon: 'ic_icon',
  //       pressAction: {
  //         id: 'default',
  //       },
  //       groupSummary: true,
  //       groupId: '123',
  //       groupAlertBehavior: AndroidGroupAlertBehavior.SUMMARY,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         notifee.cancelNotification(detail.notification.id);
  //         break;
  //       case EventType.PRESS:
  //         if (detail.notification?.data?.FormId) {
  //           navigationRef?.navigate('ScreenQuestions', {
  //             appointmentDetails: {
  //               ...detail?.notification?.data,
  //             },
  //           });
  //         }
  //         break;
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onNotificationOpenedApp((notification) => {
  //     console.log({ notification }, 'onNotificationOpenedApp');
  //     if (notification?.data?.FormId) {
  //       if (navigationRef.getCurrentRoute().name === 'ScreenQuestions') {
  //         navigationRef.dispatch(
  //           StackActions.replace('ScreenQuestions', {
  //             appointmentDetails: {
  //               ...notification?.data,
  //             },
  //           }),
  //         );
  //       } else {
  //         navigationRef?.navigate('ScreenQuestions', {
  //           appointmentDetails: {
  //             ...notification?.data,
  //           },
  //         });
  //       }
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  if (!initialRouteName) {
    return <></>;
  }
  const defaultStackSettings = {
    headerShown: false,
    gestureEnabled: false,
  };

  const config = {
    animation: 'spring',
    config: {
      stiffness: 10000,
      damping: 5000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.0001,
      restSpeedThreshold: 0.0001,
    },
  };

  console.log({TransitionPresets: TransitionPresets, CardStyleInterpolators});

  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <NavigationContainer
              // linking={linking}
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
                console.log({previousRouteName, currentRouteName});
                // if (previousRouteName !== currentRouteName) {
                //   await analytics().logScreenView({
                //     screen_name: currentRouteName,
                //     screen_class: currentRouteName,
                //   });
                // }
                routeNameRef.current = currentRouteName;
              }}>
              <Stack.Navigator initialRouteName={'getStarted'}>
                <Stack.Screen
                  name="drawer"
                  component={Drawer}
                  // options={defaultStackSettings}
                  options={{
                    // ...defaultStackSettinx1gs,
                    headerShown: false,
                    gestureEnabled: true,
                    // cardStyleInterpolator: CardStyleInterpolators,
                    // ...TransitionPresets.SlideFromLeftIOS,
                    // transitionSpec: {
                    //   open: config,
                    //   close: config,
                    // },
                  }}
                />
                <Stack.Screen
                  name="getStarted"
                  component={GetStarted}
                  options={defaultStackSettings}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
        <Toast position="bottom" config={toastConfig} />
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>App</Text>
        </View> */}
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    flex: 1,
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
