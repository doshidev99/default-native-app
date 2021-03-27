// import React, { memo, useState } from 'react';
// import {
//   View, FlatList, ActivityIndicator, RefreshControl,
// } from 'react-native';
// import PropTypes from 'prop-types';

// import AppContainer from '../AppContainer';
// import AppText from '../AppText';
// // import AppSearchInput from '../AppSearchInput';
// // import FriendItem from '../FriendItem';

// import styles from './styles';

// const FriendList = (props) => {
//   const {
//     data, navigation, createList, onPress,
//     loading, placeholderSearch, onSearch,
//     onFetchData,
//   } = props;

//   const [page, setPage] = useState(1);

//   const renderHeader = () => {
//     if (loading || data.length > 0) return null;

//     return (
//       <View style={[styles.productItem, createList && styles.pdHorizontal0]}>
//         <AppText>Aucun résultat trouvé</AppText>
//       </View>
//     );
//   };

//   const renderFooter = () => {
//     if (loading) return <ActivityIndicator />;

//     return null;
//   };

//   const renderItem = ({ item }) => ( // eslint-disable-line
//     <AppContainer width="100%" containerStyle={[styles.friendBox, createList && styles.pdHorizontal0]}>
//       <FriendItem
//         id={item.friend._id}
//         name={`${item.friend.firstName} ${item.friend.lastName}`}
//         image={item.friend.avatar}
//         birthday={item.friend.birthday}
//       />
//     </AppContainer>
//   );

//   const renderList = () => (
//     <FlatList
//       data={data}
//       style={styles.flexOne}
//       keyExtractor={item => item._id}
//       refreshControl={renderRefreshControl()}
//       onMomentumScrollBegin={onMomentumScrollBegin}
//       onEndReachedThreshold={0.5}
//       onEndReached={onEndReached}
//       ListHeaderComponent={renderHeader}
//       ListFooterComponent={renderFooter}
//       renderItem={renderItem}
//     />
//   );

//   return (
//     <AppContainer width="100%" style={styles.flexOne} containerStyle={styles.flexOne}>
//       {renderSearch()}

//       {renderList()}
//     </AppContainer>
//   );
// };

// FriendList.propTypes = {
//   data: PropTypes.instanceOf(Array),
//   navigation: PropTypes.instanceOf(Object).isRequired,
//   loading: PropTypes.bool,
//   placeholderSearch: PropTypes.string,
//   createList: PropTypes.bool,
//   onSearch: PropTypes.func,
//   onFetchData: PropTypes.func,
//   onPress: PropTypes.func,
// };

// FriendList.defaultProps = {
//   data: [],
//   loading: false,
//   placeholderSearch: 'Rechercher un ami(s)',
//   createList: false,
//   onSearch: () => { },
//   onFetchData: () => { },
//   onPress: () => { },
// };

// export default memo(FriendList);
