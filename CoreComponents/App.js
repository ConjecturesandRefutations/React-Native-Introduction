import { View, Text, Image, ImageBackground } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

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

      {/* <Image source={logoImg} style="width: 300, height: 300"/>
      <Image source={{ uri: "https://picsum.photos/300" }} style="width: 300, height: 300"/> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text>IMAGE TEXT</Text>
      </ImageBackground>
  </View>;
}