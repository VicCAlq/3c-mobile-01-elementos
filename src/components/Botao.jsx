import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  botao: {
    borderRadius: "5px",
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
})

export default function Botao({})  {
  return(<View>
    <Pressable style={estilo.botao} onPress={() => console.log("Pressionado")}>
      <Text style={estilo.texto}>CRIQUE HERE BOI</Text>
    </Pressable>
  </View>)
}
