/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

import { View, Text,Presseable } from "react-native"

export default function AtvBotaoAcaoInterna(){
    return(
        <View>
            <Text>
                Clique Abaixo
            </Text>
            <Pressable OnPress = {()=> alert("Fui clicado!")}>
                <Text>Clique Aqui</Text>
            </Pressable>
        </View>
    )
}