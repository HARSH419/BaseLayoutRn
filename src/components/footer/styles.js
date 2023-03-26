import { StyleSheet, Dimensions } from 'react-native';
import { black } from '../../constants/colors';
import { LatoRegular, MontserratSemiBold } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: (chker) => ({
    width: '90%',
    // height: '100%',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: chker ? '18%' : '0%',
    marginBottom: '5%',
    justifyContent: chker ? 'flex-start' : 'flex-end',
    // backgroundColor: 'blue',
  }),
  logo: {
    height: Dimensions.get('window').height * 0.15,
    width: '100%',
    aspectRatio: 2,
    // justifyContent: 'flex-start'
  },
  link: {
    marginTop: 10,
    color: black,
    fontSize: 12,
    textDecorationLine: 'underline',
    fontFamily: LatoRegular,
  },
  row: {
    flexDirection: 'row',
  },
  linkLeftMargin: {
    marginEnd: '5%',
  },
  copyRight: {
    textAlign: 'center',
    marginTop: '1%',
    fontSize: 12,
    color: black,
    fontFamily: LatoRegular,
    lineHeight: 20,
  },
});
export default styles;
