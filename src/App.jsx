import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo'

export default function App() {
  return (
    <View style={styles.container}>
      <Divisoria>
        <Paragrafo conteudo="Sou um exemplo1"/>
        <Botao/>
        <AtvParagrafo
          titulo={"titulo teste"}
          conteudo={"opa, será?"}
        />
      </Divisoria>
      
      <text>sou um texto novo</text>
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
