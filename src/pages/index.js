import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, OpenSource } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <OpenSource />
    <Skills />
    <Contact />
  </Layout>
);
