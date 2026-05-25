import { View, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  view: {
    borderRadius: "10px",
    padding: root.spacings.paddingG,
    backgroundColor: root.colors.foreground,
    gap: root.spacings.gap
  },
})

export default function Divisoria({children})  {
  return(<View style={estilo.view}>
    {children}
  </View>)
}
