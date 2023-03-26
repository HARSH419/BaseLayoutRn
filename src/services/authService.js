import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import moment from 'moment';
import EncryptedStorage from 'react-native-encrypted-storage';
import getEnvVars from '../environment';
import { refreshTokenApiCall } from '../utils/helper';
// import { clearCart } from '../store/cartSlice';
// import { removeCredentials } from '../store/credentialsSlice';
// import { clearBookedAppointments } from '../store/slotBookingSlice';
// import { navigationRef } from '../utils/RootNavigation';

let baseUrl = '';
// const baseUrl = 'https://drz-alpha-webapi.azurewebsites.net/api/';
// var baseUrl = '';

let isRequestPending = false;

export const fetchEnv = async () => {
  const { API_URL } = await getEnvVars();
  baseUrl = API_URL;
  return API_URL;
};
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    console.log({ baseUrl }, 'In prepareHeaders');
    const previousAccessToken = await EncryptedStorage.getItem('accessToken');
    const token = previousAccessToken;
    console.log({ New: token });
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  try {
    const projectId = await fetchEnv();
    if (!projectId) {
      return {
        error: {
          status: 400,
          statusText: 'Bad Request',
          data: 'No project ID received',
        },
      };
    }
    const urlEnd = typeof args === 'string' ? args : args.url;
    const adjustedUrl = `${projectId}${urlEnd}`;
    console.log({ adjustedUrl, projectId, chk: typeof args === 'string' }, 'In baseQueryWithReauth');

    const adjustedArgs =
      typeof args === 'string'
        ? adjustedUrl
        : {
            ...args,
            url: adjustedUrl,
          };
    let result = await baseQuery(adjustedArgs, api, extraOptions);
    // const refreshResult = await refreshTokenApiCall({
    //   baseQuery,
    //   api,
    //   extraOptions,
    // });
    // if (refreshResult?.data?.accessToken) {
    //   await EncryptedStorage.setItem('lastRefreshTime', moment().unix().toString());
    //   await EncryptedStorage.setItem('accessToken', refreshResult?.data?.accessToken);
    //   await EncryptedStorage.setItem('refreshToken', refreshResult?.data?.refreshToken);
    // }
    return result;
  } catch (error) {
    console.log({ InAuthError: error });
  }
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (payload) => ({
        url: 'Auth/register',
        method: 'POST',
        body: payload,
      }),
    }),
    phoneRegisterUser: builder.mutation({
      query: (payload) => ({
        url: 'Auth/phoneregister',
        method: 'POST',
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: 'Auth/phonelogin',
        method: 'POST',
        body: payload,
      }),
    }),
    verifyUser: builder.mutation({
      query: ({ emailId, accessToken }) => ({
        url: `Auth/confirm-registration/${emailId}/${accessToken}`,
        method: 'GET',
      }),
    }),
    forgetPassword: builder.mutation({
      query: ({ emailId }) => ({
        url: `Auth/password-reset/${emailId}`,
        method: 'GET',
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: 'Auth/password-reset',
        method: 'POST',
        body: payload,
      }),
    }),
    refreshToken: builder.mutation({
      query: (payload) => ({
        url: 'Auth/refresh-token',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const verificationApi = createApi({
  reducerPath: 'phoneVerificationApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    verifyNumber: builder.mutation({
      query: (payload) => ({
        url: `PhoneVerification?phoneNumber=%2B${payload.phoneNumber}`,
        method: 'POST',
      }),
    }),
    confirmNumber: builder.mutation({
      query: (payload) => ({
        url: 'PhoneVerification/',
        method: 'POST',
        body: { phoneNumber: payload.phNumber, code: payload.code },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  usePhoneRegisterUserMutation,
  useLoginUserMutation,
  useVerifyUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
} = authApi;

export const { useVerifyNumberMutation, useConfirmNumberMutation } = verificationApi;
