import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <bt />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript is to help aspiring and established etc etc
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;