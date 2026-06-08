import React from 'react';
import { View } from 'react-native';

export default function AtvDivisoria({ largura }) {
  // Garante que o valor fique entre 10 e 90 caso venha fora do limite
  const larguraEsquerda = Math.max(10, Math.min(90, largura));
  const larguraDireita = 100 - larguraEsquerda;

  return (
    <View style={{ width: '90vw', flexDirection: 'row' }}>
      <View style={{ width: `${larguraEsquerda}%` }} />
      <View style={{ width: `${larguraDireita}%` }} />
    </View>
  );
}
