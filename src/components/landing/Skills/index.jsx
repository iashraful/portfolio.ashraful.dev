import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Ashraful and I’m a Backend & DevOps Engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I have following skills,
          <p>
            <code>Python</code>, <code>Django</code>, <code>Flask</code>, <code>REST API</code>, <code>GraphQL</code>
            <br />
            <code>JavaScript</code>, <code>NodeJS</code>, <code>VueJS</code>, <code>React</code>
          </p>
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
