import React from 'react';
import { View, Button } from 'react-native';
import Share from 'react-native-share';

const shareContent = (socialPlatform) => {
  const shareOptions = {
    message: 'Check this out!',
    url: 'https://example.com',
    social: socialPlatform,
  };

  Share.open(shareOptions)
    .then((res) => console.log(res))
    .catch((err) => {
      err && console.log(err);
    });
};

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Share on WhatsApp" onPress={() => shareContent(Share.Social.WHATSAPP)} />
    <Button title="Share on Facebook" onPress={() => shareContent(Share.Social.FACEBOOK)} />
  </View>
);

export default App;
