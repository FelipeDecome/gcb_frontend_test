import React from 'react';

import aboutSVG from '../../../assets/images/about.svg';
import { Button } from '../../../components';
import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <div>
        <img src={aboutSVG} alt="About" />
        <div className="content">
          <h2>The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <Button hasShadow>Know more</Button>
        </div>
      </div>
    </Container>
  );
};

export { About };
