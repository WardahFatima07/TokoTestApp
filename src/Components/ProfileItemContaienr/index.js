import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProfileItemContainer = props => {
  const { name, image, profileLink, handleProfileLink } = props;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.text}>{name}</Text>

      <Text onPress={handleProfileLink} style={styles.link}>
        {profileLink}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: 'cover',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },

  link: {
    fontSize: 14,
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});
export default ProfileItemContainer;
