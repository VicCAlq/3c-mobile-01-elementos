/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
    div:{
        backgroundColor:root.colors.azul,
        padding:root.spacings.paddingG,
        color:root.colors.background,
        margin:root.spacings.paddingM,
    },
    botao:{
        padding:root.spacings.paddingM,
        color:root.colors.texto,
        backgroundColor:root.colors.primariaEscura,
    },
    texto:{
        color:root.colors.texto,
    }
})

export default function AtvBotaoAcaoInterna({}){
    return (
        <View style={estilo.div}>
            <Text sytle={estilo.texto}>
                Clique abaixo
            </Text>
            <Pressable onPress={() => alert('Fui clicado!')} style={estilo.botao}>
                <Text style={estilo.texto}> 
                    Clique aqui 
                </Text>
            </Pressable>
        </View>
    )
}