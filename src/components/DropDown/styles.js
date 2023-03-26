import { StyleSheet, Dimensions } from 'react-native';
import { black, blue, transparent, white } from '../../constants/colors';
import { fontWeights, MontSerrat, MontserratSemiBold } from '../../constants/fonts';
import { normalize } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  content: {
    borderWidth: 0.5,
    height: 48,
    backgroundColor: transparent,
    paddingStart: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelStyle: {
    flex: 1,
    fontSize: normalize(16),
    color: black,
    fontFamily: MontSerrat,
    fontWeight: fontWeights.bold,
  },
  arrow: {
    marginEnd: 10,
    transform: [{ rotate: '270deg' }],
  },
});
export default styles;
