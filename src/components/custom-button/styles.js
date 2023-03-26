import { StyleSheet } from 'react-native';
import { btnTextColor, inputBorderColor, white } from '../../constants/colors';
import { CormorantBold } from '../../constants/fonts';
import { normalize } from '../../utils/helper';
const styles = StyleSheet.create({
  buttonContainer: (size) => ({
    marginVertical: 12,
    backgroundColor: white,
    width: 327,
    height: size === 'lg' ? 70 : 50,
    borderWidth: 1,
    borderColor: inputBorderColor,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }),
  buttonText: (size) => ({
    color: btnTextColor,
    fontSize: size === 'lg' ? normalize(30) : normalize(27),
    lineHeight: 30,
    fontFamily: CormorantBold,
    textTransform: 'capitalize',
  }),
  loader: {
    marginLeft: 10,
  },
});
export default styles;
