import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    // <ScrollView style={styles.scrollView}>
    //   <Card style={styles.card}>
    //     <Card.Title title="Go To DashBoard" />
    //     <Card.Content>
    //       <Button
    //         mode="contained"
    //         onPress={() => navigation.navigate("DashBoard")}
    //       >
    //         Register
    //       </Button>

    //       <Button
    //         mode="contained"
    //         onPress={() => navigation.navigate("DashBoard")}
    //       >
    //         Sign Up
    //       </Button>
    //       <View
    //         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    //       >
    //         <Button onPress={() => navigation.navigate("DashBoard")}>
    //           Go to notifications
    //         </Button>
    //       </View>
    //     </Card.Content>
    //   </Card>
    // </ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('DashBoard')}>
        Go to notifications
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50%",
  },
});

export default HomeScreen;
