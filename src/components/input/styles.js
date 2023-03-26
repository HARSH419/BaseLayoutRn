import { StyleSheet, Platform } from 'react-native';
import { black, inputBorderColor, textBlack } from '../../constants/colors';
import {
  fontWeights,
  LatoLight,
  LatoRegular,
  LatoThin,
  MontSerrat,
  MontserratSemiBold,
} from '../../constants/fonts';
import { normalize } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  label: {
    marginBottom: 8,
    fontFamily: LatoRegular,
    fontSize: normalize(12),
    marginStart: '5%',
    color: black,
    textTransform: 'uppercase',
  },
  inputContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: inputBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
    width: '94%',
    justifyContent: 'space-between',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 54,
    fontSize: 16,
    marginTop: 0.7,
    color: textBlack,
    fontFamily: 'Roboto',
    // textDecorationLine: 'underline',
    // borderWidth: 1
  },
  passwordInput: {
    width: 280,
  },
  validationError: {
    color: 'red',
    fontSize: normalize(11),
    fontFamily: MontSerrat,
    fontWeight: '400',
    marginStart: 20,
    marginTop: 3,
  },
});

export default styles;
