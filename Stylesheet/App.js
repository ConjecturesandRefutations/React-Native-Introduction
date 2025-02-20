import { Text, View, StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
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
  container:{ flex:1, backgroundColor: "plum", padding: 60 },
  box:{
    width:100,
    height:100,
    //padding:10
    paddingHorizontal:10,
    paddingVertical:20,
    marginVertical:10,
    borderWidth: 2,
    borderColor: 'purple'
  },
  lightBlueBg:{ backgroundColor: "lightblue"},
  lightGreenBg:{ 
    backgroundColor: "lightgreen"
},
  lightRedBg:{ 
    backgroundColor: "salmon"
    }
}
)