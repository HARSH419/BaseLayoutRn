import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { lightGray } from '../../constants/colors';

const CustomButton = (props) => {
  const {
    text,
    onPress,
    showLoading,
    style = {},
    disabled,
    textStyle,
    renderLeft,
    size = 'lg',
  } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer(size),
        style,
        pressed ? { opacity: 0.5 } : { opacity: 1 },
        showLoading ? { opacity: 0.5 } : { opacity: 1 },
        {
          backgroundColor: disabled
            ? lightGray
            : style?.backgroundColor
            ? style?.backgroundColor
            : styles.buttonContainer(size).backgroundColor,
        },
      ]}
      onPress={() => onPress()}
      disabled={disabled || showLoading}
    >
      {renderLeft}
      <Text style={[styles.buttonText(size), textStyle]}>{text}</Text>
      {showLoading && <ActivityIndicator style={styles.loader} />}
    </Pressable>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  textStyle: PropTypes.object,
  renderLeft: PropTypes.node,
};

CustomButton.defaultProps = {
  showLoading: false,
};

export default CustomButton;
