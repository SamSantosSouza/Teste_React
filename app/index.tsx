import { useState } from "react";
import { Text, View, Image, Button} from "react-native";


export default function Index() {

  const [message, setMessage] = useState('-Mana vc é ygona é sua fã divulga ela.');

  const changeMessage = () => {
    setMessage('-Como assim mana? não entendi... ATA mana a ygona é sua fã!! quem é ygona mana?')
  }

  const returnMessage = () => {
    setMessage('-Mana vc é ygona é sua fã divulga ela.')
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        

      }}
    >
      <Text>{message}</Text>
      <Image 
      style={{ width: 300 , height: 300 }}
      source={{uri: 'https://s2.glbimg.com/O23UOPFNHW0wBG4O3OTgECObi_Q=/0x0:620x722/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/G/B/ZAPKVkS5mlEdst0i8qzQ/2019-07-20-fernanda.jpg'}}
      />
      <Button title="Clique para alterar" onPress={changeMessage} />
      <Button title="voltar para a primeira" onPress={returnMessage} />
    </View>
  );
}
