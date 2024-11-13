import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Diesel() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Diesel type :- Octane 92 / Octane 95" />
        <Card.Title title="District :- Gampaha " />
        <Card.Title title="City :- Gampaha Twon " />
        <Card.Title title="Current Price in 1L :- Rs.380" />
        <Card.Title title="Available Liters :- 500L " />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});

export default Diesel;