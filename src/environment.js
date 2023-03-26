// import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import Toast from 'react-native-toast-message';

export const ENVTypes = {
  DEV: 'DEV',
  PROD: 'PROD',
};

const ConfigDEV = {
  API_URL: 'https://google.com/api/',
  // API_TEAPOT_VERSION: "2.3",
  // APP_VERSION: "3.0.0"
};

const ConfigPROD = {
  API_URL: 'https://google.com/api/',
  //   API_TEAPOT_VERSION: '2.3',
  //   APP_VERSION: '3.0.0',
};

export const getCurrentEnv = async () => {
  const currentEnv = await EncryptedStorage.getItem('CURRENT_ENV');
  console.log({ currentEnv });
  return (currentEnv ?? ENVTypes.PROD) === ENVTypes.DEV ? ENVTypes.DEV : ENVTypes.PROD;
};

export const getEnvVars = async () => {
  const currentEnv = await getCurrentEnv();
  // return ConfigDEV;
  return currentEnv === ENVTypes.DEV ? ConfigDEV : ConfigPROD;
};

export const toggleEnv = async () => {
  const currentEnv = await getCurrentEnv();
  // console.log({ toggleEnv/currentEnv });
  const changedEnv = currentEnv !== ENVTypes.DEV ? ENVTypes.DEV : ENVTypes.PROD;
  console.log(`current Env was ${currentEnv}, switched to ${changedEnv}`);
  EncryptedStorage.setItem('CURRENT_ENV', changedEnv);
  Toast.show({
    type: 'success',
    text1: 'Toggle Env',
    text2: `To ${changedEnv}`,
  });
  return changedEnv;
};

export default getEnvVars;
