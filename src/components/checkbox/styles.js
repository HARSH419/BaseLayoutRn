import { StyleSheet, Platform } from 'react-native';
import { btnTextColor, textBlack } from '../../constants/colors';
import {
  fontWeights,
  LatoRegular,
  LatoBold,
  MontSerrat,
  LatoLight,
  CormorantBold,
} from '../../constants/fonts';
import { normalize } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxCircle: {
    height: 28,
    width: 28,
    marginLeft: 2,
    borderColor: textBlack,
  },
  checkboxText: (toggleCheckBox) => ({
    fontSize: normalize(16),
    fontFamily: LatoBold,
    textTransform: 'uppercase',
    marginLeft: 20,
    color: toggleCheckBox ? btnTextColor : textBlack,
    // fontWeight: 'bold',
  }),
});

export default styles;
