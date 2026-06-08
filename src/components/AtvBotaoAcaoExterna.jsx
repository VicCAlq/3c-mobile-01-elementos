/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/

import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

export default function AtvBotaoAcaoExterna({comando}){
    const estilo = StyleSheet.create(
       {
            botao:{
                backgroundColor:root.colors.foreground,
                margin: root.spacings.margin,
                padding: root.spacings.paddingM,
                borderRadius: root.percents.ten,
            },
            texto:{
                color: root.colors.texto
            },
            div:{
                backgroundColor:root.colors.azul,
                margin: root.spacings.margin,
                padding: root.spacings.paddingG,
                borderRadius: root.percents.ten
            }
        }
    )

    return(
        <View style={estilo.div}>
            <Text style={estilo.texto}> Clique abaixo </Text>
            <Pressable onPress={comando} style={estilo.botao}>
               <Text style={estilo.texto}>
                Clique aqui
                </Text> 
            </Pressable>
        </View>
    )
}
