import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Item } from '../types/item';

type Props = {
  item: Item;
  onPress: () => void;
};

export default function ItemLista({ item, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.item}>
        {item.tipo} - {item.material} ({item.quantidade})
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    borderRadius: 6,
  },
});