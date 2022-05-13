import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/86542760?v=4';

const urlToMyGithub = 'https://github.com/GabrielGPena793';

export default function App() {
  async function handlePressGoToGithub() {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Gabriel no quarto com fundo preto"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Gabriel Gomes Pena "
          style={[style.defaultTextColor, style.name]}>
          Gabriel Gomes Pena
        </Text>
        <Text
          accessibilityLabel="Nickname: GabrielGPena793"
          style={[style.defaultTextColor, style.nickName]}>
          GabrielGPena793
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudando para ser um dev fullstack"
          style={[style.defaultTextColor, style.description]}>
          Estudando para ser um dev fullstack
        </Text>
      </View>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
          <Text style={[style.defaultTextColor, style.textButton]}>
            Open in GitHub
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, // expandi para a tela inteira
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorGithub,
  },
  content: {
    alignItems: 'center',
    color: 'white',
    paddingHorizontal: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  defaultTextColor: {
    color: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickName: {
    fontSize: 15,
    color: '#6E767E',
  },
  description: {
    fontSize: 14,
    marginTop: 15,
  },
  button: {
    backgroundColor: '#30363D',
    padding: 12,
    borderWidth: 1,
    borderColor: '#6E767E',
    borderRadius: 10,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
