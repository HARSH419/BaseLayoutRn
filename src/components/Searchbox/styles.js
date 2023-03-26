import { Dimensions, StyleSheet } from 'react-native';
import { black, lightGray, textBlack, white } from '../../constants/colors';
import { LatoRegular } from '../../constants/fonts';
import { normalize } from '../../utils/helper';

const transparent = 'transparent';
const styles = StyleSheet.create({
  textInput: {
    fontSize: normalize(20),
    paddingLeft: 10,
    width: Dimensions.get('window').width * 0.76,
    color: textBlack,
    fontFamily: LatoRegular,
    marginStart: 10,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.89,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: lightGray,
  },
});

export default styles;
