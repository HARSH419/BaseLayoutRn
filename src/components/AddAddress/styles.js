import { StyleSheet, Dimensions } from 'react-native';
import { black, blue, transparent, white } from '../../constants/colors';
import { fontWeights, MontSerrat, MontserratSemiBold } from '../../constants/fonts';
import { normalize } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  inputStyle: {
    width: '100%',
    borderWidth: 0.5,
    backgroundColor: transparent,
  },
  labelStyle: {
    fontSize: normalize(16),
    color: black,
    fontFamily: MontserratSemiBold,
    // fontWeight: fontWeights.bold,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '7%',
  },
});
export default styles;
