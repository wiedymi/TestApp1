import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from '../theme';

function Link({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    marginVertical: theme.margin.default,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});

export default Link;
