import { Text, View, StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Light Green Box</Text>
      </View>
      <View style={[styles.box, styles.lightRedBg]}>
        <Text>Learning React Native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDA0DD", // plum
    padding: 60
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#800080' // purple
  },
  lightBlueBg: {
    backgroundColor: "#ADD8E6" // lightblue
  },
  lightGreenBg: {
    backgroundColor: "#90EE90" // lightgreen
  },
  lightRedBg: {
    backgroundColor: "#FA8072" // salmon
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5 // for Android
  }
});
