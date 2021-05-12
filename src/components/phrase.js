import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

function Phrase({text, num}) {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{num}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const sharedStyles = {
  borderWidth: 1,
  borderColor: theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 36,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 160,
    overflow: 'hidden',
    margin: theme.margin.small,
    height: 36,
  },
  num: {
    ...sharedStyles,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    width: 28,
    height: 36,
    borderTopLeftRadius: theme.radius,
    borderBottomLeftRadius: theme.radius,
    textAlign: 'center',
  },
  text: {
    ...sharedStyles,
    justifyContent: 'flex-start',
    width: 132,
    borderTopRightRadius: theme.radius,
    borderBottomRightRadius: theme.radius,
    paddingHorizontal: theme.padding.default,
  },
});

export default Phrase;
