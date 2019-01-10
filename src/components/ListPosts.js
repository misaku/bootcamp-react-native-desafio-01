import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Post from './Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
const ListPosts = ({ posts }) => (
  <ScrollView style={styles.container}>
    {posts && posts.map(post => (<Post {...post} />))}
  </ScrollView>
);
ListPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      subtitulo: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ListPosts;
