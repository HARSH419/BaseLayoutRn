import React, { useEffect } from 'react';
import { Animated, Easing, Dimensions, Image } from 'react-native';

import { BackgoundImage } from './styles';
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from '../../constants/config';

const translateIn = {
  inX: -(Dimensions.get('window').width * 0.9375),
  inY: -(Dimensions.get('window').height * 0.9375),
};

const BackgroundAnimation = ({ backgroundImage }) => {
  const inicialValue = 0;
  const translateValue = new Animated.Value(inicialValue);

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(inicialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  const AnimetedImage = Animated.createAnimatedComponent(BackgoundImage);

  return (
    <>
      <AnimetedImage
        resizeMode="repeat"
        source={backgroundImage}
        style={{
          zIndex: 10,
          transform: [
            {
              translateX: translateAnimation,
            },
            {
              translateY: translateAnimation,
            },
          ],
        }}
        translateIn={translateIn}
      />
    </>
  );
};

export default BackgroundAnimation;
