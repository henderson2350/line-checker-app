import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
var image = require("./assets/bigLogo.png");

function App() {
  const handlePress = () => console.log("Text clicked");

  return (
    //View is like a div
    //Safe area view keeps it beyond the notch
    //Text always has to be wrapped in a text component
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
      <Image onPress={handlePress} source={image} />
      </TouchableOpacity>
      {/* <Text onPress={handlePress}>Line Checker</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //view is flexible and takes up the entire screen
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
