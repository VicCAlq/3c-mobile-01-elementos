/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo" que recebe dois argumentos: um "titulo" e um "conteudo". O componente deve exibir uma <View> com dois elementos <Text> internos, um que terá o conteúdo do argumento "título" e outro que terá o conteúdo do argumento "conteudo". O texto de "titulo" deve ter o tamanho de 32px, e o texto de "conteudo" deve ter o tamanho de 16px. O texto do "titulo" deve ficar acima do texto do "conteudo".
*/

import { View, Text, StyleSheet } from "react-native";
const estilo = StyleSheet.create (
    {
        View:{
            height: "20%",  
            margin: "20px", 
            borderRadius:"50px",
            justifyContent: "center",
            alignItems:"center",
            display: "flex",
            backgroundColor:"#2c203c",
            padding:"20px",
        },
        titulo:{
            fontSize: "32px",
            color: "#929292"
        },
        conteudo:{
            fontSize:"16px",
            color: "#e0e0e0",
            padding:"10px",
        },
        paragrafo:{
            fontSize:"32px",
            fontStyle:"italic",
            color: "#4a4a4a",
        }
    }
)

export default function AtvParagrafo({titulo, conteudo}){
    return(
        <View style={estilo.View}>
            <Text style={estilo.paragrafo}>
                Parágrafo
            </Text>
            <Text style={estilo.titulo}>
                {titulo}
            </Text>
            <Text style={estilo.conteudo}>
                {conteudo}
            </Text>
        </View>
    )
}
