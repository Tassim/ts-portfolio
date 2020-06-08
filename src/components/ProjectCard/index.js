import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./style.css";
import run from '../../assets/img/runwild.png';

function ProjectCard(props) {
  return (
    <div>
      <Card className="projectcard" centered >
        <Image alt={props.name} src={props.image} size="small" centered />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={props.url}>Project <Icon name="arrow right" size="large" color="black" link /></a>
          <a href={props.github}>Repo
            <Icon name="github" size="large" color="grey" link />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default ProjectCard;
