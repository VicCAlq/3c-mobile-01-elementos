/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/
export default function AtvBotaoAcaoInterna(){

function mostrarAlerta(){
    Alert.alert('FUI CLICADO');

}
 return (
    <View>
        <Text style={estilos.texto}>
            Clique abaixo
        </Text>

     <Pressable
      style={estilo.botao}
      onPress={mostrarAlerta}
      

    >
        <Text style={estilos.textoBotao}>
            Clique aqui
        </Text>
      </Pressable>

    </View>
 );


}
