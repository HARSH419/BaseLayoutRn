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

  const hideSplash = async () => {
    try {
      SplashScreen.hide();
    } catch (error) {
      console.log({ error });
    }
  };

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

  useEffect(() => {
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
    hideSplash();


  }, []);

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
