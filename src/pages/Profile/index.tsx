import React from 'react';

import { 
  Container,
   Main,
   LeftSide,
   RightSide,
   Repos,
   CalendarHeading,
   RepoIcon,
   Tab,
 } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar/index';


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
  
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1,2,3,4,5,6].map(item => (
                <RepoCard
                  key={item}
                  username={'ClovijanRocha'}
                  reponame={'github-clone'}
                  description={'clone do github'}
                  language={item % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={9}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;   