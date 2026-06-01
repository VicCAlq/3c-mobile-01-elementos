import { Pressable, View, Text, StyleSheet } from "react-native";

/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como
 argumento uma função chamada "comando". Este componente deve exibir uma <View> 
 com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> 
 com o texto "Clique aqui" que ao ser pressionado executa a função recebida no 
 argumento "comando".
*/
const estilo = StyleSheet.create({

  
    botao: {
        backgroundColor: "steelblue",
        borderRadius:"20px",
        maxWidth:"10vw" 
    },
    texto: {
        color: "white",

    },
})

export default function AtvBotaoAcaoExterna({comando})
{
    return(<View>
        <Text style={estilo.texto}>
            Clique abaixo
        </Text>
        <Pressable onPress={comando} style={estilo.botao}>
            <Text style={estilo.texto}>
                Clique aqui
            </Text>
        </Pressable>
    </View>)
        
}