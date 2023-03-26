import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import EyeCrossed from '../../../assets/icons/eye-crossed.svg';
import Eye from '../../../assets/icons/eye.svg';
import PropTypes from 'prop-types';
import styles from './styles';
import { inputPlaceholderColor, lightGray } from '../../constants/colors';
// import CountryPicker from 'react-native-country-picker-modal';
const eyeSize = 20;

const Input = forwardRef(function Input(props, ref) {
  const {
    inputType,
    label,
    placeholder,
    secureTextEntry,
    keyboardType,
    defaultValue,
    style,
    inputStyle,
    labelStyle,
    countryDetails,
    setCountryDetails,
    ...rest
  } = props;
  const [validationError, setValidationError] = useState('');
  const [value, setValue] = useState(defaultValue);
  const [isSecure, setIsSecure] = useState(secureTextEntry || false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const regex = new RegExp(emailRegex);
  // const [countryDetails, setCountryDetails] = useState({
  //   cca2: 'US',
  //   callingCode: ['1'],
  //   currency: ['USD'],
  //   flag: 'flag-us',
  //   name: 'United States',
  //   region: 'Americas',
  //   subregion: 'North America',
  // });

  const changeInputValue = (newValue) => {
    if (inputType === 'password' && newValue.length > 15) return;
    setValue(newValue);
  };

  const validateField = useCallback(() => {
    try {
      let isValid = true;
      setValidationError('');
      console.log({ inputType });
      switch (inputType) {
        case 'password':
          isValid = value.length > 5;
          if (!isValid) setValidationError('Password must be at least 6 characters long.');
          break;
        case 'name':
          isValid = value.length && value.length < 20;
          if (!isValid) setValidationError('First Name must be shorter than 20 characters.');
          break;
        case 'lastName':
          isValid = value.length && value.length < 20;
          if (!isValid) setValidationError('Last Name must be shorter than 20 characters.');
          break;

        case 'phone':
          isValid = value.length === 10;
          global.myVar = `+${countryDetails.callingCode[0]}`;
          if (!isValid) setValidationError('Phone number must be 10 digits long.');
          break;
        case 'email':
          isValid = regex.test(value);
          if (!isValid) setValidationError('Invalid email');
          break;
      }
      console.log({ isValid, value });
      return { isValid, value };
    } catch (error) {
      console.log({ error, inputType });
    }
  }, [value]);

  useImperativeHandle(ref, () => ({ validateField }));

  return (
    <View style={[styles.container, style]}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, inputStyle]}>
        {inputType === 'phone' ? (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}
          >
            {/* <CountryPicker
              countryCode={countryDetails?.cca2}
              withFilter
              withFlag
              withAlphaFilter
              withCallingCode
              withEmoji
              withCallingCodeButton
              containerButtonStyle={{
                height: 54,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onSelect={(item) => {
                setCountryDetails(item);
              }}
            /> */}

            <TextInput
              style={[styles.input, inputType === 'password' ? styles.passwordInput : {}]}
              placeholder={placeholder}
              autoCapitalize={'none'}
              secureTextEntry={isSecure}
              onChangeText={changeInputValue}
              value={value}
              keyboardType={keyboardType}
              placeholderTextColor={inputPlaceholderColor}
              autoCorrect={false}
              {...rest}
            />
          </View>
        ) : (
          <TextInput
            style={[styles.input, inputType === 'password' ? styles.passwordInput : {}]}
            placeholder={placeholder}
            autoCapitalize={'none'}
            secureTextEntry={isSecure}
            onChangeText={changeInputValue}
            value={value}
            keyboardType={keyboardType}
            placeholderTextColor={inputPlaceholderColor}
            autoCorrect={false}
            {...rest}
          />
        )}

        {secureTextEntry && (
          <Pressable onPress={() => setIsSecure(!isSecure)} hitSlop={5}>
            {isSecure ? (
              <EyeCrossed height={eyeSize} width={eyeSize} />
            ) : (
              <Eye height={eyeSize} width={eyeSize} />
            )}
          </Pressable>
        )}
      </View>
      <Text style={styles.validationError}>{validationError}</Text>
    </View>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  inputType: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  defaultValue: PropTypes.string,
  countryDetails: PropTypes.object,
  setCountryDetails: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  secureTextEntry: false,
  keyboardType: 'default',
  defaultValue: '',
};

export default Input;
