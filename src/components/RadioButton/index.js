import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './styles';

const RadioButton = ({
  textStyle = null,
  containerStyle = null,
  onSelect = () => {},
  data = [],
  titleKey = 'text',
  radioContainerStyle = null,
  radioContainer = null,
  devider = null,
}) => {
  const [buttons, setButtons] = React.useState([]);

  const onPress = (index) => {
    const selected = data[index].isSelected ? data[index].isSelected : true;
    data = data.map((item, i) => {
      if (i === index) {
        item.isSelected = selected;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    onSelect(data[index]);
    setButtons([...data]);
  };

  React.useEffect(() => {
    if (data?.length && data?.length >= 1) setButtons([...data]);
    else setButtons([]);
    // return () => {
    //   second
    // }
  }, [data]);

  console.log({ devider });

  const renderButtons = () => {
    return buttons.map((button, index) => {
      return (
        <>
          <Pressable
            onPress={() => onPress(index)}
            style={[styles.container, radioContainerStyle]}
            key={index}
          >
            <View style={[styles.radioContainer(button?.isSelected), radioContainer]}>
              {button?.isSelected ? <View style={styles.selectedStyle}></View> : null}
            </View>
            <Text style={[styles.text, textStyle]}>{button?.[titleKey]}</Text>
          </Pressable>
          {devider && <View style={styles.devider} />}
        </>
      );
    });
  };

  return <View style={containerStyle}>{renderButtons()}</View>;
};

export default RadioButton;
