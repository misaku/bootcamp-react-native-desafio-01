import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const COLORS = {
  bg: '#fff',
  bdBottom: '#f3f3f3',
  bk: '#000',
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.bg,
    borderRadius: 5,
    flex: 1,
    margin: 10,
    padding: 20,
  },
  header: {
    borderBottomColor: COLORS.bdBottom,
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingBottom: 5,

  },
  title: {
    color: COLORS.bk,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
const Post = ({ titulo, subtitulo, texto }) => (
  <View style={styles.box}>
    <View style={styles.header}>
      <Text style={styles.title}>{titulo}</Text>
      <Text>{subtitulo}</Text>
    </View>
    <Text>{texto}</Text>
  </View>
);
Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};
export default Post;
