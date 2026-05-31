/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo" 
que recebe dois argumentos: um "titulo" e um "conteudo". O componente deve exibir uma
 <View> com dois elementos <Text> internos, um que terá o conteúdo do argumento "título"
  e outro que terá o conteúdo do argumento "conteudo". O texto de "titulo" deve ter o tamanho
   de 32px, e o texto de "conteudo" deve ter o tamanho de 16px. O texto do "titulo" 
   deve ficar acima do texto do "conteudo".
*/
import { View, Text, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    Titulo:
    {
        fontSize: 32,
        color:"white"
    },
    Conteudo:
    {
        fontSize: 16,
        color:"white"
    }
})

export default function AtvParagrafo ({titulo, conteudo})
{return(
    <View>
        <Text style={estilo.Titulo}>
            {titulo}
        </Text>
        <Text style={estilo.Conteudo}>
            {conteudo}
        </Text>
     
    </View>
)}
