import React from 'react';
import SocialSharingContainer from '../socialSharing/socialSharingContainer';

const GwContainer: React.FC = () => {
  return (
    <SocialSharingContainer
      title="Check out this awesome content!"
      message="This is a sample message"
      url="https://example.com"
    >
      <Text>This is a sample content</Text>
    </SocialSharingContainer>
  );
};

export default GwContainer;
