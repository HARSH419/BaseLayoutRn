import {StyleSheet, Dimensions} from 'react-native';
import {black, blue, dot, red, white} from '../../constants/colors';
import {
  CormorantBold,
  MontserratSemiBold,
  LatoRegular,
} from '../../constants/fonts';
import {normalize} from '../../utils/helper';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  logoBar: isMenu => ({
    height: '10%',
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: isMenu ? 'space-between' : 'center',
    flexDirection: 'row',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: '97%',
    alignSelf: 'center',
  }),
  back: {
    position: 'absolute',
    left: 0,
    marginStart: 20,
  },
  mainLogo: isMenu => ({
    // width: isMenu ? '55%' : '100%',
    flex: 1,
    height: isMenu ? '70%' : '58%',
    alignItems: 'center',
    marginTop: '1%',
    // marginBottom: '5%',
    // backgroundColor: 'red',
  }),
  menu: {
    width: 300,
    marginTop: 50,
    marginStart: 20,
    backgroundColor: dot,
    color: white,
  },
  menuicon: {
    margin: 20,
  },

  menuitem: {
    maxWidth: 350,
  },

  menusubitem: {
    marginStart: 30,
    maxWidth: 350,
  },
  menutext: {
    color: white,
    fontSize: normalize(24),
    fontFamily: LatoRegular,
  },
  cartIconContainer: {
    position: 'absolute',
    top: height * 0.02,
    right: width * 0.04,
    borderRadius: 500,
    height: width * 0.06,
    width: width * 0.06,
    padding: 1,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  cartCount: {
    fontSize: normalize(14),
    fontFamily: MontserratSemiBold,
    color: white,
  },
});
export default styles;
