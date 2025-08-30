import React, { useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileItemContainer from '../../Components/ProfileItemContaienr';
import SearchInput from '../../Components/SearchInput';
import ProfileViewPopup from '../../Components/Popups/ProfileViewPopup';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const modalRef = useRef(null);

  const dataArr = [
    {
      login: 'mojombo',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url:
        'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    {
      login: 'defunkt',
      id: 2,
      node_id: 'MDQ6VXNlcjI=',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/defunkt',
      html_url: 'https://github.com/defunkt',
      followers_url: 'https://api.github.com/users/defunkt/followers',
      following_url:
        'https://api.github.com/users/defunkt/following{/other_user}',
      gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
      organizations_url: 'https://api.github.com/users/defunkt/orgs',
      repos_url: 'https://api.github.com/users/defunkt/repos',
      events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/defunkt/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    {
      login: 'pjhyett',
      id: 3,
      node_id: 'MDQ6VXNlcjM=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pjhyett',
      html_url: 'https://github.com/pjhyett',
      followers_url: 'https://api.github.com/users/pjhyett/followers',
      following_url:
        'https://api.github.com/users/pjhyett/following{/other_user}',
      gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
      organizations_url: 'https://api.github.com/users/pjhyett/orgs',
      repos_url: 'https://api.github.com/users/pjhyett/repos',
      events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pjhyett/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
  ];

  const handleProfileLink = item => {
    modalRef?.current?.show(item);
  };

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.headerTextStyle}>List of Users</Text>

        <SearchInput placeholder="Search" returnKeyType="search" />
      </View>
    );
  };

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
      paddingTop: insets.top,
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
      <FlatList
        data={dataArr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        numColumns={2}
        columnWrapperStyle={styles.flatlistContentContainer}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />

      <ProfileViewPopup
        reference={modalRef}
        // image={} name={}
      />
    </View>
  );
};

export default HomeScreen;
