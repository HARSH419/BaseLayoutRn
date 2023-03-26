import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, Pressable } from 'react-native';
import BackBlack from '../../../assets/icons/back_black.svg';

const DropDown = (props) => {
  const { label, textKey, data, selectedIndex } = props;
  const [index, setIndex] = useState(selectedIndex);

  useEffect(() => {
    setIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Pressable style={styles.content}>
        <Text style={styles.labelStyle}>{data[index][textKey]}</Text>
        <BackBlack height={20} style={styles.arrow} />
      </Pressable>
    </View>
  );
};

DropDown.propTypes = {};

export default DropDown;
