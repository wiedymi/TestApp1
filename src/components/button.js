import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from '../theme';

function Button({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    width: 328,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.white,
  },
});

export default Button;
