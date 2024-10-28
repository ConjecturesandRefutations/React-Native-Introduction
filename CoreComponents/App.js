import { View, Text } from 'react-native';

export default function App(){
  return <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width:200, height:200, backgroundColor: "lightblue", justifyContent:"center", alignItems:"center" }}>
        <Text>Text One</Text>
      </View>
      <View style={{ width:200, height:200, backgroundColor: "lightgreen", justifyContent:"center", alignItems:"center" }}>
        <Text>
          <Text style={{ color:"red" }}>Text Two </Text>
           is Nested
        </Text>
      </View>
  </View>;
}