import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

const GetStarted = ({navigation}) => {
  // const navigation = useNavigation();
  console.log({navigation});
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={() => {
        navigation.navigate('drawer');
      }}>
        <Text>GetStartedss</Text>
      </Pressable>
    </View>
  );
};

export default GetStarted;
