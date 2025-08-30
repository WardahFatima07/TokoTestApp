import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileItemContainer from '../../Components/ProfileItemContaienr';
import SearchInput from '../../Components/SearchInput';
import ProfileViewPopup from '../../Components/Popups/ProfileViewPopup';
import useHome from '../../hooks/useHome';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const modalRef = useRef(null);

  const { users, fetchUsers } = useHome();

  const [search, setSearch] = useState('');

  const handleProfileLink = item => {
    modalRef?.current?.show(item);
  };

  const getData = async () => {
    let params = {};

    if (search !== '') {
      params.search = search;
    }

    await fetchUsers(params);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, [search]);

  useEffect(() => {
    getData();
  }, []);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>No users found</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <ProfileItemContainer
        name={item.login?.toUpperCase()}
        image={item.avatar_url}
        profileLink={item.html_url}
        handleProfileLink={() => handleProfileLink(item)}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingTop: insets.top + 20,
    },

    flatlistContainer: {
      paddingBottom: 100,
    },

    flatlistContentContainer: {
      justifyContent: 'space-between',
    },

    headerTextStyle: {
      fontWeight: 'bold',
      fontSize: 22,
      color: 'black',
    },

    emptyStateContainer: {
      alignItems: 'center',
      marginTop: 50,
    },

    emptyStateText: {
      fontSize: 14,
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>List of Users</Text>

      <SearchInput
        placeholder="Search"
        returnKeyType="search"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.flatlistContentContainer}
        contentContainerStyle={styles.flatlistContainer}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />

      <ProfileViewPopup reference={modalRef} />
    </View>
  );
};

export default HomeScreen;
