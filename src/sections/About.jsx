import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

function About({ id }) {
  return (
    <Section id={id} title="About Me">
      <AboutText>
        I am a Computer Science Engineering student with hands-on experience in
        frontend development. I completed a 1-month internship at CodSoft where
        I built real-world projects like a landing page, portfolio, and
        calculator.
      </AboutText>
    </Section>
  );
}

export default About;
