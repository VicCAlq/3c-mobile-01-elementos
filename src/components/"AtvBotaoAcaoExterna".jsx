import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function AtvBotaoAcaoExterna({ comando }) {
  return (
    <View>
      <Text>Clique abaixo</Text>
      <Pressable onPress={comando}>
        <Text>Clique aqui</Text>
      </Pressable>
    </View>
  );
}
