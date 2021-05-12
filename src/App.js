import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import * as C from './components';
import {phrases, translation} from './mock';
import {theme} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <C.Title text={translation.title} />
            <C.Title text={translation.subtitle} subtitle />
          </View>
          <View style={styles.phrases}>
            {phrases.map((phrase, index) => (
              <C.Phrase text={phrase} num={index + 1} key={phrase} />
            ))}
          </View>
          <View style={styles.links}>
            <C.Link text={translation.links.copy} />
            <C.Link text={translation.links.send} />
          </View>
          <C.Button text={translation.button} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginVertical: theme.margin.default,
  },
  links: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
    marginTop: 18,
  },
  phrases: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default App;
