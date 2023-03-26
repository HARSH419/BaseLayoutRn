import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const deleteToken = async () => {
  try {
    await messaging().deleteToken();
  } catch (error) {
    console.log('Get On Logout', { error });
  }
};

export const logout = () => {
  if (navigationRef.isReady()) {
    deleteToken();
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }),
    );
  }
};
