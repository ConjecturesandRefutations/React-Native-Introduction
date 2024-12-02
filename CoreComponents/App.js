import { View } from "react-native";
import Greet from './Components/Greet'
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding:60 }}>
      <Greet name={'Bruce Wayne'}></Greet>
      <Greet name={'Clark Kent'}></Greet>
    </View>
  );
}
