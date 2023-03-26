import React, { useState } from 'react';

import styles from './styles';

import CartIcon from '../../../assets/icons/cart_icon.svg';
import Ham from '../../../assets/icons/HamburgerIcon.svg';
import Logo from '../../../assets/icons/GroupEdit.svg';
import Close from '../../../assets/icons/close_menu.svg';
import { Pressable, TouchableOpacity } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { removeCredentials } from '../../store/credentialsSlice';
import EncryptedStorage from 'react-native-encrypted-storage';
// import { setCategory } from '../../store/questionnaireSlice';
import { CommonActions, useNavigation } from '@react-navigation/native';
// import { clearCart } from '../../store/cartSlice';
// import { clearBookedAppointments } from '../../store/slotBookingSlice';
import BackBlack from '../../../assets/icons/back_black.svg';
import { ENVTypes, toggleEnv } from '../../environment';
import { useEffect } from 'react';

var numTaps = 0;
const Header = (props) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [userLog, setuserLog] = useState(false);
  const dispatch = useDispatch();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  // const cart = useSelector((state) => state.cart);
  // const { cartCount } = cart;
  const isMenu = props?.isMenu ?? true;
  const isBack = props?.isBack;

  function Hamburger() {
    if (visible == false) {
      return <Ham style={styles.menuicon}></Ham>;
    } else {
      return <Close height={40} width={40} style={styles.menuicon}></Close>;
    }
  }

  const navigateToAccount = () => {
    navigation.navigate('Account');
    hideMenu();
  };

  const signOut = async () => {
    // dispatch(removeCredentials());
    // dispatch(clearCart());
    // dispatch(clearBookedAppointments());
    try {
      hideMenu();
      await EncryptedStorage.clear();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        }),
      );
    } catch (err) {
      console.warn(err);
    }
  };

  // const navigateToCart = () => {
  //   navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: [
  //         { name: 'Home' },
  //         {
  //           name: 'Cart',
  //         },
  //       ],
  //     }),
  //   );
  // };

  const onNTaps = (taps) => {
    if (taps >= 3) {
      console.log('Done');
      toggleEnv().then((env) => {
        setDevMode(env === ENVTypes.DEV ? true : false);
      });
    }
  };

  const handleTaps = () => {
    if (numTaps >= 3) {
      setTimeout(() => {
        switch (numTaps) {
          case 5:
            onNTaps(numTaps);
            break;
          default:
            onNTaps(numTaps);
            break;
        }
        numTaps = 0;
      }, 500);
    }

    numTaps++;
  };

  const isUserAlreadyLoggedIn = async () => {
    navigation.navigate('Home');
    // if (isLoggedIn === 'true') {
    // } else {

    // }
    // console.log({ isLoggedIn });
  };
  const isUserLoggedIn = async () => {
    const isLoggedIn = await EncryptedStorage.getItem('isLoggedIn');
    setuserLog(isLoggedIn == 'true' ? true : false);
    // return isLoggedIn === 'true';
    // if () {
    //   navigation.navigate('Home');
    // }
    console.log({ isLoggedIn });
  };

  function MainLogo() {
    return (
      <Logo
        width={'100%'}
        height={'100%'}
        // style={{ width: '50%', height: '10%', backgroundColor: 'red' }}
      />
    );
  }

  useEffect(() => {
    (async () => {
      await isUserLoggedIn();

      // return () => {
      //   second
      // }
    })();
  }, []);

  console.log({ chk: numTaps });

  return (
    <View style={styles.logoBar(isMenu)}>
      {isBack && (
        <Pressable style={styles.back} onPress={() => navigation.pop()}>
          <BackBlack height={25} width={25} />
        </Pressable>
      )}
      {isMenu ? (
        <Menu
          style={styles.menu}
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Hamburger></Hamburger>
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem
            style={styles.menuitem}
            textStyle={styles.menutext}
            onPress={() => {
              navigation.navigate('Home');
              hideMenu();
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onPress={() => {
              navigation.navigate('Merchandise');
              hideMenu();
            }}
            style={styles.menuitem}
            textStyle={styles.menutext}
          >
            Our Products
          </MenuItem>
          <MenuItem
            onPress={() => {
              navigation.navigate('SpeaktoSpecialist');
              hideMenu();
            }}
            style={styles.menuitem}
            textStyle={styles.menutext}
          >
            Speak to Specialist
          </MenuItem>
          <MenuItem style={styles.menuitem} textStyle={styles.menutext}>
            Find a Product by:
          </MenuItem>
          <MenuItem
            style={styles.menusubitem}
            textStyle={styles.menutext}
            onPress={() => {
              // dispatch(setCategory('Symptom'));
              // navigation.navigate('GenderForm');
              hideMenu();
            }}
          >
            Symptoms
          </MenuItem>
          <MenuItem
            style={styles.menusubitem}
            textStyle={styles.menutext}
            onPress={() => {
              dispatch(setCategory('Lifestyle'));
              navigation.navigate('GenderForm');
              hideMenu();
            }}
          >
            Lifestyle
          </MenuItem>
          <MenuItem
            style={styles.menusubitem}
            textStyle={styles.menutext}
            onPress={() => {
              dispatch(setCategory('PrePostSurgery'));
              navigation.navigate('GenderForm');
              hideMenu();
            }}
          >
            Pre-Surgery
          </MenuItem>
          <MenuItem
            style={styles.menusubitem}
            textStyle={styles.menutext}
            onPress={() => {
              dispatch(setCategory('PrePostSurgery'));
              navigation.navigate('GenderForm');
              hideMenu();
            }}
          >
            Post-Surgery
          </MenuItem>
          {/* <MenuItem style={styles.menuitem} textStyle={styles.menutext} onPress={hideMenu}>
          Schedule Another Drip
        </MenuItem> */}
          <MenuItem style={styles.menuitem} textStyle={styles.menutext} onPress={navigateToAccount}>
            Account
          </MenuItem>
          <MenuItem
            style={styles.menuitem}
            textStyle={styles.menutext}
            onPress={() => {
              navigation.navigate('PendingForms');
              hideMenu();
            }}
          >
            Pending Actions
          </MenuItem>
          <MenuItem
            style={styles.menuitem}
            textStyle={styles.menutext}
            onPress={() => {
              navigation.navigate('Appointments');
              hideMenu();
            }}
          >
            Your Appointment
          </MenuItem>
          <MenuItem style={styles.menuitem} textStyle={styles.menutext} onPress={() => signOut()}>
            Sign Out
          </MenuItem>
        </Menu>
      ) : null}
      <Pressable
        style={styles.mainLogo(userLog ? isMenu : false)}
        onPress={() => {
          userLog ? isUserAlreadyLoggedIn() : handleTaps();
        }}
      >
        <MainLogo></MainLogo>
      </Pressable>
      {isMenu ? (
        <Pressable onPress={()=>{console.log("cart");}}>
          {/* {cartCount ? (
            <View style={styles.cartIconContainer}>
              <Text style={styles.cartCount}>{cartCount > 9 ? '9+' : cartCount}</Text>
            </View>
          ) : null} */}
          <View>
            <CartIcon style={{ ...styles.menuicon }} />
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object,
};

export default Header;
