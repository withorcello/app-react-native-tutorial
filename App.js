// App.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import theme from './src/styles/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.background.primary}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.background.primary,
  },
});

export default App;