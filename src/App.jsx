import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';


import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvParagrafo from './components/AtvParagrafo';

<AtvDivisoria>
  <AtvParagrafo></AtvParagrafo>

  <AtvBotaoAcaoExterna>
  </AtvBotaoAcaoExterna>

  <AtvBotaoAcaoInterna>
  </AtvBotaoAcaoInterna>
</AtvDivisoria>

export default function App() {
  return (
    <View style={styles.container}>
       
      <Divisoria>
        <Paragrafo conteudo="Sou um exemplo"/>
        <Botao/>
         <AtvBotaoAcaoExterna  comando ={() => console.log("Clicado!")}/>
       
      <AtvBotaoAcaoInterna>
      </AtvBotaoAcaoInterna>
      <AtvParagrafo titulo={"titulo"}>
        </AtvParagrafo>
         <AtvParagrafo conteudo={"conteudo"}>
        </AtvParagrafo>
      
      </Divisoria>
      <StatusBar style="auto" />
   
  <Text>Texto</Text>

      <AtvDivisoria largura ={30}>
      </AtvDivisoria>
     
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: root.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: root.colors.texto
  }
});

