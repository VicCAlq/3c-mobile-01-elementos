
/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo"
que recebe dois argumentos: um "titulo" e um "conteudo".
O componente deve exibir uma <View> com dois elementos 
<Text> internos, um que terá o conteúdo do argumento 
"título" e outro que terá o conteúdo do argumento
"conteudo". O texto de "titulo" deve ter o tamanho de 32px,
e o texto de "conteudo" deve ter o tamanho de 16px. O texto 
do "titulo" deve ficar acima do texto do "conteudo".
*/


import { View, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  titulo: {
    fontSize: '32px'
  },
  conteudo: {
    fontSize: '16px'
  }
})


export default function AtvParagrafo({titulo})  {
  return(<View style={estilo.view}>
    {titulo}
  </View>)
}

export default function AtvParagrafo({conteudo})  {
  return(<View style={estilo.view}>
    {conteudo}
  </View>)
}
