import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Share } from 'expo-sharing';

interface SocialSharingProps {
  children: React.ReactNode;
  title: string;
  message: string;
  url: string;
}

const SocialSharingContainer: React.FC<SocialSharingProps> = ({ children, title, message, url }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      await Share.share({
        title,
        message,
        url,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <View>
      {children}
      <TouchableOpacity onPress={handleShare}>
        <Text>Share</Text>
      </TouchableOpacity>
      {isSharing ? <Text>Sharing...</Text> : null}
    </View>
  );
};

export default SocialSharingContainer;
