import { PixelRatio, Dimensions, Alert } from 'react-native';
import { QuestionTypes } from '../constants/config';
import EncryptedStorage from 'react-native-encrypted-storage';
import moment from 'moment';
import { CommonActions } from '@react-navigation/native';
// import { removeCredentials } from '../store/credentialsSlice';
// import { clearCart } from '../store/cartSlice';
// import { clearBookedAppointments } from '../store/slotBookingSlice';
import { logout } from './RootNavigation';

export const removeBlankSlots = (data = []) => {
  const pureData = data.map((dates) => {
    const newData = dates;
    newData.hourSlots = dates?.hourSlots?.filter((slot) => slot.slotsAvailable != 0);
    return newData;
  });
  return pureData;
};

export const resetSelectedSlot = (slots = []) => {
  const updatedSlots = [
    ...slots.map((dates) => {
      dates.hourSlots.map((slot) => {
        slot.isSelected = false;
        return slot;
      });
      return dates;
    }),
  ];
  return updatedSlots;
};

export const clearSelectedSlotFromCart = (cartData = []) => {
  const updatedCart = cartData.map((cart) => {
    delete cart.selectedSlot;
    return cart;
  });
  return updatedCart;
};

export const normalize = (size) => {
  const scale = Dimensions.get('screen').fontScale;
  const newSize = size * scale;
  let calculatedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));

  if (PixelRatio.get() < 3) return calculatedSize - 0.5;
  return calculatedSize;
};

export const getUpdatedFormData = (formData, questionIndex, questionId, answerId, type, isAdd) => {
  const updatedFormData = formData;
  if (type === QuestionTypes.Text || type === QuestionTypes.Signature) {
    updatedFormData.questions[questionIndex] = {
      questionId,
      customAnswerOrSignatureString: answerId,
      selectedAnswers: [],
    };
  } else if (type === QuestionTypes.Binary || type === QuestionTypes.MultipleOptionSingleAnswer) {
    updatedFormData.questions[questionIndex] = {
      questionId,
      selectedAnswers: [{ answerId }],
    };
  } else if (type === QuestionTypes.MultipleOptionMultipleAnswer) {
    if (isAdd) {
      const newData = [...(formData.questions[questionIndex]?.selectedAnswers ?? []), { answerId }];
      updatedFormData.questions[questionIndex] = {
        questionId,
        selectedAnswers: newData,
      };
    } else {
      updatedFormData.questions[questionIndex] = {
        questionId,
        selectedAnswers: [
          ...formData.questions[questionIndex]?.selectedAnswers.filter(
            (data) => data?.answerId !== answerId,
          ),
        ],
      };
    }
  }
  return updatedFormData;
};

export const checkIfAnyBlankQuestion = (formData, questions) => {
  const hasEmptyValue = questions.find((element, index) => {
    if (element?.type === QuestionTypes.Text) {
      if (
        !formData?.questions[index] ||
        !formData?.questions[index].customAnswerOrSignatureString?.trim()
      ) {
        return true;
      } else {
        return false;
      }
    } else if (
      element?.type === QuestionTypes.MultipleOptionMultipleAnswer ||
      element?.type === QuestionTypes.MultipleOptionSingleAnswer ||
      element?.type === QuestionTypes.Binary
    ) {
      if (!formData?.questions[index] || !formData?.questions[index].selectedAnswers?.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
  // console.log({hasEmptyValue});
  return hasEmptyValue ? true : false;
};

export const isNumeric = (val) => {
  return /^-?\d+$/.test(val);
};

var isTokenRefreshing = false;
export const refreshTokenApiCall = async ({ baseQuery, api, extraOptions }) => {
  const lastRefreshTime = await EncryptedStorage.getItem('lastRefreshTime');
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
      // api.dispatch(removeCredentials());
      // api.dispatch(clearCart());
      // api.dispatch(clearBookedAppointments());
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
