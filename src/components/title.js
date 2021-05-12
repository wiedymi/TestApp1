import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

function Title({text, subtitle}) {
  return (
    <View style={styles.container}>
      <Text style={subtitle ? styles.subtitle : styles.title}>{text}</Text>
    </View>
  );
}

const titleStyle = {
  color: theme.colors.grey,
  fontSize: 16,
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    width: 330,
  },
  title: {
    ...titleStyle,
    fontWeight: 'bold',
  },
  subtitle: titleStyle,
});

export default Title;
