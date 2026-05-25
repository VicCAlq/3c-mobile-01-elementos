import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  texto: {
    color: root.colors.texto,
    fontSize: "32px",
  }
})



export default function AtvParagrafo {{titulo}} {
  return(
    <Text style={estilo.View}>{conteudo}</Text>
  )
}









/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado 
"AtvParagrafo" que recebe dois argumentos: um "titulo"
 e um "conteudo". O componente deve exibir uma <View>
  com dois elementos <Text> internos, um que terá o 
  conteúdo do argumento "título" e outro que terá o 
  conteúdo do argumento "conteudo". O texto de "titulo
  " deve ter o tamanho de 32px, e o texto de "conteudo
  " deve ter o tamanho de 16px. O texto do "titulo" de
  ve ficar acima do texto do "conteudo".
*/


