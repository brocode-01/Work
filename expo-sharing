import React from 'react';
import { View, Button, Platform } from 'react-native';
import * as Sharing from 'expo-sharing';

const BasicShare = async () => {
  const isAvailable = await Sharing.isAvailableAsync();
  if (isAvailable) {
    await Sharing.shareAsync('https://example.com', {
      dialogTitle: 'Share this content',
      mimeType: 'text/plain',
    });
  } else {
    alert('Sharing is not available on this platform');
  }
};

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Share" onPress={BasicShare} />
  </View>
);

export default App;
