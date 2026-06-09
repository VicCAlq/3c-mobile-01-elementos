/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento
. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo",
 e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto 
 "Fui clicado!"
*/

import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function AtvBotaoAcaoExterna() {
    return (
        <View>
<Text>
    Clique abaixo
</Text>
<Pressable onPress={() => window.alert( "Fui clicado!")}>
    <Text>
        Clique aqui
    </Text>
</Pressable>
        </View>
    )
}