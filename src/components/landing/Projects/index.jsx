import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Tags, Tag } from './styles';
import projectData from './data';

function RenderTag(props) {
  const { tags } = props;
  const tagList = tags.map(tag => <Tag key={tag}>{tag}</Tag>);
  return <div>{tagList}</div>;
}

async function getImage(path) {
  // eslint-disable-next-line no-console
  console.log(path);
  const image = await import(path);
  return image;
}

const renderEachProject = projectData.map(project => (
  <Item as="a" href={project.website} target="_blank" rel="noopener noreferrer" key={project.website}>
    <Card>
      <Content>
        <img src={getImage(project.cover)} alt={project.name}></img>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </Content>
      <Tags>
        <div>
          <RenderTag tags={project.tags} />
        </div>
      </Tags>
    </Card>
  </Item>
));

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>{renderEachProject}</Grid>
  </Wrapper>
);
