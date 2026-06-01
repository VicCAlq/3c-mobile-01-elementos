import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';


const estilo = StyleSheet.create({
  titulo: {
    color: root.colors.texto,
    fontSize: 32
  },
  conteudo: {
    color: root.colors.texto,
    fontSize: 16
  }
})


export default function AtvParagrafo ({titulo, conteudo }) {
  return(
    <View>
    <Text style={estilo.titulo}>
      {titulo}
      </Text>

      <Text style={estilo.conteudo}>
        {conteudo}
      </Text>
    </View>
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


