import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import styles from './styles';
import { blue, btnTextColor } from '../../constants/colors';

const CustomCheckBox = (props) => {
  const { text, style, textStyle = {}, checkStyle = {}, onChange, defaultValue } = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(defaultValue);

  const updateTags = (value) => {
    setToggleCheckBox(value);
    onChange(value);
  };

  return (
    <View style={[styles.container, style]}>
      <CheckBox
        value={toggleCheckBox}
        onValueChange={(newValue) => updateTags(newValue)}
        style={[styles.checkboxCircle, checkStyle]}
        onCheckColor={btnTextColor}
        tintColor="lightgray"
        onTintColor="lightgray"
        tintColors={{ true: blue, false: 'black' }}
      />
      <TouchableOpacity
        tiltAngle={0.1}
        onPress={() => {
          updateTags(toggleCheckBox ? false : true);
        }}
      >
        <Text
          style={[styles.checkboxText(toggleCheckBox), textStyle]}
          numberOfLines={3}
          ellipsizeMode="clip"
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

CustomCheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool.isRequired,
};

CustomCheckBox.defaultProps = {
  style: {},
};

export default CustomCheckBox;
