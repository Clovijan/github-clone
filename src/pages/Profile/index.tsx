import React from 'react';

import { Container, Main, LeftSide, RightSide, } from './styles';
import ProfileData from '../../components/ProfileData';


const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
              username={'Clovijan'}
              name={'Clovijan'}
              avatarUrl={'https://avatars1.githubusercontent.com/u/37074720?v=4'}
              followers={8}
              following={8}
              company={'UFS'}
              location={'Sergipe'}
              email={'clovijan@gmail.com'}
              blog={'clovijan@blog'}
            />
        </LeftSide>
  
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;   