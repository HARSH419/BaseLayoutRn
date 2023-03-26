import moment from "moment";
import EncryptedStorage from "react-native-encrypted-storage/lib/typescript/EncryptedStorage";

export const isNumeric = (val) => {
    return /^-?\d+$/.test(val);
  };
  
  var isTokenRefreshing = false;
  export const refreshTokenApiCall = async ({ baseQuery, api, extraOptions }) => {
    const lastRefreshTime: number = await EncryptedStorage.getItem('lastRefreshTime');
    const isLoggedIn = await EncryptedStorage.getItem('isLoggedIn');
    const tokenExpirationTime = moment().subtract(10, 'minutes');
    if (isLoggedIn !== 'true') {
      return false;
    }
    if (moment.unix(lastRefreshTime).isBefore(tokenExpirationTime) && isTokenRefreshing === false) {
      isTokenRefreshing = true;
      const previousAccessToken = await EncryptedStorage.getItem('accessToken');
      const previousRefreshToken = await EncryptedStorage.getItem('refreshToken');
      console.log('token refresh start ------');
      // console.log(previousAccessToken, 'previousAccessToken');
      // console.log(previousRefreshToken, 'previousRefreshToken');
      const refreshResult = await baseQuery(
        {
          url: `Auth/refresh-token`,
          method: 'POST',
          body: {
            accessToken: previousAccessToken,
            refreshToken: previousRefreshToken,
          },
          headers: {
            authorization: `Bearer ${previousAccessToken}`,
          },
        },
        api,
        extraOptions,
      );
      isTokenRefreshing = false;
      //check if another device is looged in.
      if (refreshResult?.error?.status === 400) {
        api.dispatch(removeCredentials());
        api.dispatch(clearCart());
        api.dispatch(clearBookedAppointments());
        try {
          await EncryptedStorage.clear();
          logout();
        } catch (err) {
          console.warn(err);
        }
        Alert.alert('Logout', 'Multiple device detected!', [{ text: 'Ok', onPress: () => {} }], {
          cancelable: false,
        });
      }
      return refreshResult;
    } else {
      return false;
    }
  };