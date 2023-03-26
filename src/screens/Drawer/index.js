import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {black, blue, white} from '../../constants/colors';

import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from '../../constants/config';
import Animated, {
  SlideInRight,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import * as Animatable from 'react-native-animatable';

// const translateIn = {
//   inX: -(Dimensions.get('window').width * 0.9375),
//   inY: -(Dimensions.get('window').height * 0.9375),
// };

const Drawer = () => {
  // const inicialValue = 0;
  // const translateValue = new Animated.Value(inicialValue);
  // useEffect(() => {
  //   const translate = () => {
  //     translateValue.setValue(inicialValue);
  //     Animated.timing(translateValue, {
  //       toValue: ANIMATION_TO_VALUE,
  //       duration: ANIMATION_DURATION,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }).start(() => translate());
  //   };

  //   translate();
  // }, [translateValue]);

  // const translateAnimation = translateValue.interpolate({
  //   inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
  //   outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  // });

  // const AnimetedImage = Animated.createAnimatedComponent(BackgoundImage);

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(offset.value * Dimensions.get('window').width)},
      ],
    };
  });

  let data = [
    {name: 'My Profile', icon: ''},
    {name: 'Wallets', icon: ''},
    {name: 'My orders', icon: ''},
    {name: 'About us', icon: ''},
    {name: 'Privacy policy', icon: ''},
    {name: 'Settings', icon: ''},
    {name: 'Logout', icon: '', navigation: false},
  ];

  useEffect(() => {
    setTimeout(() => {
      offset.value = Math.random();
    }, 500);
    // offset.value = withTiming(0, {
    //   duration: 500,
    //   easing: Easing.out(Easing.exp),
    // });
    // return () => {
    //   second
    // }
  }, []);

  return (
    <View style={styles.containerMain}>
      {/* <Animated.View style={[styles.drawerContainer, animatedStyles]}> */}
      <Animatable.View animation="slideInLeft" easing="ease-in-out" iterationCount={1} iterationDelay={500}>
        <Text style={{color: white}}>Drawer</Text>
      </Animatable.View>
      {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#FBFBFD',
  },
  drawerContainer: {
    backgroundColor: blue,
    width: 0,
    flex: 1,
    paddingTop: 30,
  },
});

export default Drawer;
