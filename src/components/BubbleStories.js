import React from 'react';
import {View, StyleSheet} from 'react-native';

export function BubbleStories() {
  return (
    <View>
      <View style={style.stories} />
      <View style={style.stories} />
      <View style={style.stories} />
      <View style={style.stories} />
      <View style={style.stories} />
      <View style={style.stories} />
    </View>
  );
}

const style = StyleSheet.create({
  stories: {
    backgroundColor: '#096E3A',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginBottom: 3,
    marginHorizontal: 2,
  },
});
