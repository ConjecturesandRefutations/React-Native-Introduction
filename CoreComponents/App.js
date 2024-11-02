import { View, Button, ScrollView, Text, Image, ImageBackground, Pressable } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  return (

  <View style={{ flex: 1, backgroundColor: "#F4F5F4", padding:60 }}>
    <Button title='Login' onPress={ ()=> console.log('Button Pressed')} color="#017AFF" />
      <Text style={{fontFamily: "Open Sans"}}>PLUG</Text>
      <Pressable onPress={ ()=> console.log('Image Pressed')}>
        <Image source={logoImg} style={{width: 300, height: 300}}/>
      </Pressable>
      <Pressable>
        <Text onPress={ ()=> console.log('Text Pressed')}>
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

        As Cicero would put it, “Um, not so fast.”

        The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

        Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.

        In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:
        </Text>
      </Pressable>
  </View>

  );
}


{/* <View style={{ width:200, height:200, backgroundColor: "lightblue", justifyContent:"center", alignItems:"center" }}>
<Text>Text One</Text>
</View>
<View style={{ width:200, height:200, backgroundColor: "lightgreen", justifyContent:"center", alignItems:"center" }}>
<Text>
  <Text style={{ color:"red" }}>Text Two </Text>
   is Nested
</Text>
</View>


<ImageBackground source={logoImg} style={{ flex: 1 }}>
<Image source={logoImg} style={{width: 300, height: 300"}}/>
<Image source={{ uri: "https://picsum.photos/300" }} style="width: 300, height: 300"/>
  <Text>IMAGE TEXT</Text>
</ImageBackground> */}


{/* <ScrollView>
<Image source={logoImg} style={{width: 300, height: 300}}/>
<Text>
 Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

 As Cicero would put it, “Um, not so fast.”

 The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

 Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.

 In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:
</Text>
<Image source={logoImg} style={{width: 300, height: 300}}/>
</ScrollView>
 */}