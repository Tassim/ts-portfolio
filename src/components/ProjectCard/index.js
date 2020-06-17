import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./style.css";
import run from '../../img/runwild.png';

function ProjectCard(props) {
  return (
    <div>
      <Card className="projectcard" centered >
        <Image alt={props.name} src={props.image} centered />
        <Card.Content style={{height: "200px", overflowX: "scroll", }}>
        <a href={props.url}><Card.Header>{props.name}</Card.Header></a>
          <Card.Description>
            {props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <a href={props.url}>Project <Icon name="arrow right" size="large" color="black" link /></a> */}
          <a href={props.github}>Repo
            <Icon name="github" size="large" color="grey" />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default ProjectCard;
