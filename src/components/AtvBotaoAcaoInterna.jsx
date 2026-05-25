import { Alert, Pressable } from "react-native";

/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna"
 que não recebe nenhum argumento.Este componente deve exibir uma <View>
  com dois elementos: um <Text> com o texto "Clique abaixo",
   e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto 
   "Fui clicado!"
*/
export default function AtvBotaoAcaoInterna ({})
{
    return(<View>
        <Text>
            Clique abaixo
        </Text>
        <Pressable OnPress={()=> Alert("Fui clicado!")}>
            Clique aqui
        </Pressable>
    </View>)
}