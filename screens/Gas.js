import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Gas() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Gas type :- Litro / LAUGFS" />
        <Card.Title title="District :- Kalutara " />
        <Card.Title title="City :- Matugama " />
        <Card.Title title="Current Price in 5 kg :- Rs.4500" />
        <Card.Title title="Available  :- 20 cylinders " />
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

export default Gas;