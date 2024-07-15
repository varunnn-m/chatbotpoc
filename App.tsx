import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [showWebView, setShowWebView] = useState(false);
  const url =
    'https://api.whatsapp.com/send/?phone=%2B971800637227&text&type=phone_number&app_absent=0';
  const webUrl = 'https://meraas.com/ask-meraas/index.html';
  const webIcon = './assets/images/webIcon.png';
  const whatsappIcon = './assets/images/whatsappIcon.png';
  return (
    <>
      {!showWebView && (
        <View style={styles.main}>
          <Text style={styles.heading}>Welcome to Meraas ChatBot!</Text>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require(webIcon)} />
            <Text
              style={styles.buttonText}
              onPress={() => setShowWebView(true)}>
              Press me to load WebView
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require(whatsappIcon)} />
            <Text
              style={styles.buttonText}
              onPress={() => Linking.openURL(url)}>
              Press me to open WhatsApp
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {showWebView && (
        <WebView
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{uri: webUrl}}
          style={{flex: 1, backgroundColor: 'red'}}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#1a2421',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 24,
    width: '90%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  heading: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 48,
  },
});

export default App;
