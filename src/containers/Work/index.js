import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Sticky, Image, Item } from 'semantic-ui-react';
import work from '../../static/Work.json';
// import images from '../../static/projects'
import ProjectCard from "../../components/ProjectCard";
import "./style.css";

class Work extends Component {
  state = {
    active: true,
    work,
  };

  render() {
    const { active } = this.state

    if (!this.state.work.length) {
      return "";
    } else {
      return (
        <div>
          <Sticky active={active}>
          <Button color="black" animated floated="right" as={Link} to="/">
            <Button.Content visible>Home</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
          </Sticky>
          <Card.Group itemsPerRow={2}>
            {this.state.work.map((work) => (
              <ProjectCard
                id={work.id}
                key={work.id}
                name={work.name}
                image={work.image}
                description={work.description}
                url={work.url}
                github={work.github}
              />
            ))}
          </Card.Group>
        </div>
      );
    }
  }
}

export default Work;
