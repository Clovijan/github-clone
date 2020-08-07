import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon, 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/Clovijan'}>
          Clovijan
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'Clovijan/github-clone'}>
          github-clone
        </Link>
      </Breadcrumb>

      <p>Clone Ui do github</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/clovijan/github-clone'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;