import React, { useImperativeHandle, useRef, useState } from 'react';
import PopupWrapper from './PopupWrapper';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileViewPopup = props => {
  const { reference } = props;

  const modalRef = useRef();

  useImperativeHandle(reference, () => ({
    show: show,
  }));

  const [hasParams, setHasParams] = useState(null);

  const show = data => {
    modalRef?.current.show();

    if (data) {
      setHasParams(data);
    }
  };

  return (
    <PopupWrapper reference={modalRef} style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => modalRef?.current?.hide()}
        style={styles.closeIconContainer}
      >
        <Image
          source={require('../../../assets/icons/cross.png')}
          style={styles.crossIconStyle}
        />
      </TouchableOpacity>

      <Image
        source={{ uri: hasParams?.avatar_url }}
        style={styles.imageStyle}
      />

      <Text style={styles.nameText}>{hasParams?.login?.toUpperCase()}</Text>

      <Text style={styles.locationText}>Karachi, PK</Text>

      <View style={styles.followInfoContainer}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.followHeading}>20</Text>
          <Text style={styles.followText}>Followers</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.followHeading}>40</Text>
          <Text style={styles.followText}>Following</Text>
        </View>
      </View>
    </PopupWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 345,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  closeIconContainer: {
    alignSelf: 'flex-end',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#7676801F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  crossIconStyle: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },

  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7676801F',
  },

  nameText: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  locationText: {
    color: 'black',
    fontSize: 12,
  },

  followInfoContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
  },

  followHeading: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  followText: {
    color: 'black',
    fontSize: 12,
  },
});

export default ProfileViewPopup;
