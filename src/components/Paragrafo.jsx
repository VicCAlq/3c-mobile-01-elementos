import { Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
})

export default function Paragrafo({conteudo})  {
  return(
    <Text style={estilo.texto}>{conteudo}</Text>
  )
}

