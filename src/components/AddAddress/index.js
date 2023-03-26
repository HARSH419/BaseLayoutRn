import React, { useState } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Input from '../input';
import DropDown from '../DropDown';
// import { useAddAddressMutation, useEditAddressMutation } from '../../services/addressService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../custom-button';
import Toast from 'react-native-toast-message';
import CustomCheckBox from '../checkbox';

const AddAddress = (props) => {
  const { navigation, setNewAddress, setLoading, isLoading, feilds, setFeilds, newAddress } = props;

  const feildsView = [
    { name: 'firstName', label: 'First Name*' },
    { name: 'lastName', label: 'Last Name*' },
    { name: 'nickName', label: 'Nick Name' },
    { name: 'addressLineOne', label: 'Street Address*' },
    { name: 'addressLineTwo', label: 'Street Address 2' },
    { name: 'city', label: 'City*' },
    { name: 'state', label: 'State*' },
    { name: 'postalCode', label: 'ZIP*', type: 'numeric' },
  ];

  // const [addAddress] = useAddAddressMutation();
  // const [editAddress] = useEditAddressMutation();

  // const addAddressApi = async () => {
  //   console.log('Enter addAddressApi');
  //   try {
  //     setLoading(true);
  //     let data = { ...feilds };
  //     feildsView?.map((x) => {
  //       if (data[x?.name] == '' || data[x?.name] == undefined) {
  //         delete data[x?.name];
  //       }
  //     });
  //     console.log({ data });
  //     if (newAddress == 'edit') {
  //       const addressRes = await editAddress(data).unwrap();
  //       console.log({ addressRes }, 'add address');
  //       setNewAddress(false);
  //     } else {
  //       const addressRes = await addAddress(data).unwrap();
  //       console.log({ addressRes }, 'add address');
  //       setNewAddress(false);
  //       if (props?.from == 'Cart') {
  //         props?.fetchAddresses();
  //       }
  //     }
  //   } catch (error) {
  //     // console.log(error?.status);
  //     if (error?.status == 400) {
  //       Toast.show({
  //         type: 'error',
  //         text1: 'Address',
  //         text2: 'Please enter all necessary feilds with star mark',
  //       });
  //       // console.log('enter 400');
  //     }
  //     setLoading(false);
  //   }
  // };

  console.log({ chk: props?.fetchAddresses });

  return (
    <View style={styles.container}>
      <DropDown
        selectedIndex={1}
        textKey="name"
        label="Country"
        data={[{ name: 'India' }, { name: 'United states' }]}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.formContainer}>
        {feildsView?.map((x, n) => {
          return (
            <Input
              key={n}
              placeholder={x?.label}
              label={x?.label}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              value={feilds[x?.name]}
              keyboardType={x?.type ? x?.type : 'default'}
              onChangeText={(value) => {
                setFeilds({ ...feilds, [x?.name]: value });
              }}
            />
          );
        })}
        <View
          style={{ flex: 1, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center' }}
        >
          {/* <Text style={styles.labelStyle}>Is Billing Address</Text>
          <Checkbox
            status={feilds?.isBillingAddress ? 'checked' : 'unchecked'}
            // style={{}}
            color={inputPlaceholderColor}
            onPress={() => {
              setFeilds({ ...feilds, isBillingAddress: !feilds?.isBillingAddress });
            }}
          /> */}
          <CustomCheckBox
            text={'Is Billing Address'}
            style={{
              marginBottom: 10,
            }}
            defaultValue={!!feilds?.isBillingAddress}
            onChange={(event) => {
              setFeilds({ ...feilds, isBillingAddress: event });
            }}
          />
        </View>
        <CustomButton
          size="md"
          text="Save"
          onPress={() => console.log("add address")}
          showLoading={isLoading}
          style={{ aspectRation: 1 }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

AddAddress.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddAddress;
