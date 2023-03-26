import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { lightGray } from '../../constants/colors';
import { MontserratSemiBold } from '../../constants/fonts';
import { normalize } from '../../utils/helper';

function TouchComponent(props) {
  return (
    <TouchableOpacity
      onPress={() => props?.press()}
      style={{
        backgroundColor: props?.disabled ? lightGray : props?.backgroundColor,
        borderRadius: props?.borderRadius,
        paddingVertical: props?.paddingVertical,
        paddingHorizontal: props?.paddingHorizontal,
        height: props?.height,
        width: props?.width,
        alignSelf: 'center',
        borderWidth: props?.borderwidth,
        marginTop: props?.marginTop,
        borderColor: props?.borderColor,
        marginBottom: props?.marginBottom,
        minWidth: props?.minWidth,
        minHeight: props?.minHeight,
      }}
      disabled={props?.disabled}
    >
      <Text
        style={{
          textAlign: 'center',
          color: props?.titlecolor,
          fontSize: normalize(props?.fontSize ?? 13),
          paddingTop: props?.titlepaddingtop,
          textTransform: 'uppercase',
          fontWeight: props?.fontWeight ? props?.fontWeight : 'bold',
          fontFamily: props?.fontFamily ? props?.fontFamily : MontserratSemiBold,
        }}
      >
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
}
export default TouchComponent;
