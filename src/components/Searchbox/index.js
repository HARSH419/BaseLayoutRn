import * as React from 'react';
import { Pressable, TextInput } from 'react-native';
import { inputPlaceholderColor } from '../../constants/colors';
import SearchLogo from '../../../assets/icons/search.svg';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Searchbox = ({ style, textInputStyle }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Search')}
      style={[styles.searchInputContainer, style]}
    >
      <TextInput
        editable={false}
        placeholder="SEARCH"
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor={inputPlaceholderColor}
      ></TextInput>
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
      >
        <SearchLogo height={20} width={20} />
      </Pressable>
    </Pressable>
  );
};

export default Searchbox;
