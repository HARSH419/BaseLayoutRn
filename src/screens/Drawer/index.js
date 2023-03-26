import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {black, blue, white} from '../../constants/colors';

const Drawer = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.drawerContainer}>
        <Text style={{color: black}}>Drawer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: blue,
  },
  drawerContainer: {
    backgroundColor: '#FBFBFD',
    width: '76%',
    flex: 1
  },
});

export default Drawer;
