/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import ListPosts from './components/ListPosts';


const COLORS = {
  bg: '#f1817d',
  color: '#333333',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    flex: 1,
  },
});
const data = [
  {
    key: 1,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
  {
    key: 2,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
  {
    key: 3,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
  {
    key: 4,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
  {
    key: 5,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
  {
    key: 6,
    titulo: 'Aprendendo React Native',
    subtitulo: 'Michel dos Santos Kuguio',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex nec ligula auctor mollis. Mauris pharetra, massa sed ornare viverra, massa purus rhoncus arcu, non mattis mauris lorem nec nulla. Nunc vitae consectetur leo. Maecenas accumsan quam quis massa tincidunt facilisis. Maecenas sit amet eleifend leo.',
  },
];
const App = () => (
  <View style={styles.container}>
    <ListPosts posts={data} />
  </View>
);

export default App;
