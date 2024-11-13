import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function DashBoard ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
          
            <Card.Title title="Main categories" />
            <Card.Content>
              <Button mode="contained" onPress={() => navigation.navigate('Fuel')}>
              Fuel
              </Button>
              
              <Button mode="contained" onPress={() => navigation.navigate('Book')}>
              Live Queue Map
              </Button>
              <Button mode="contained" onPress={() => navigation.navigate('Book')}>
              Notifications

              </Button>
              <Button mode="contained" onPress={() => navigation.navigate('Profile')}>
              Profile

              </Button>
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  
});

export default DashBoard;