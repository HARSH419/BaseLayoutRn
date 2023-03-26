import {StyleSheet} from 'react-native';
import {
  blue,
  gray,
  inputPlaceholderColora,
  lightGray,
} from '../../constants/colors';
import {MontSerrat} from '../../constants/fonts';
import {normalize} from '../../utils/helper';

let width = Dimensions.get('window').width;

const transparent = 'transparent';
const styles = StyleSheet.create({
  devider: {
    flex: 1,
    // marginHorizontal: '7%',
    borderBottomColor: inputPlaceholderColora,
    borderBottomWidth: StyleSheet.hairlineWidth + 0.8,
  },
  radioContainer: isSelected => ({
    height: width * 0.06,
    width: width * 0.06,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: isSelected ? blue : lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
  }),
  selectedStyle: {
    alignSelf: 'center',
    backgroundColor: blue,
    height: width * 0.025,
    width: width * 0.025,
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(16),
    lineHeight: 25,
    color: gray,
    fontFamily: MontSerrat,
  },
});

export default styles;
