import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
// import Logo from '../../../assets/icons/GroupEdit.svg';

const Footer = (props) => {
  const { navigation, chker } = props;

  function MainLogo() {
    return (
      <></>
      // <Logo
      //   width={'100%'}
      //   height={'100%'}
      //   // style={{ width: '50%', height: '10%', backgroundColor: 'red' }}
      // />
    );
  }

  console.log({ chker });

  return (
    <View style={styles.container(chker)}>
      <View style={{ width: '85%', height: chker ? '60%' : '20%' }}>
        <MainLogo></MainLogo>
      </View>
      <View style={styles.row}>
        <Text style={[styles.link, styles.linkLeftMargin]}>Terms of Use</Text>
        <Text style={styles.link}>Privacy Policy</Text>
      </View>
      <Text
        style={styles.copyRight}
      >{`© 2022 Hydrology\nAll Rights Reserved\n1350 S Dixie Hwy, Coral Gables, Fl 33146`}</Text>
    </View>
  );
};

Footer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Footer;
