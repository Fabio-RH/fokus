import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>FLAMENGO CAMPEÃO, PORRA!</Text>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
    
  });
        //style={{
        //flex:1,
        //justifyContent: "center",
        //lignItems: "center",
      //}}