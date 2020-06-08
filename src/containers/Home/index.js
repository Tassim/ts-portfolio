import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import MyImage from "../../assets/img/IMG_5487.jpg";
import Logo from "../../assets/img/logo_blue_round.png";
import "./style.css";

function HomePage() {
  return (
    <div>
      {/* <Image src={Logo} size='large' /> */}
      {/* <Button icon labelPosition="right" floated='right' as={Link} to="/work">
          Projects
          <Icon name="right arrow" />
        </Button> */}

      <Grid columns={2} stackable>

        <Grid.Column>
          <h1>Tassia Shibuya</h1>
          <p>
            Hello! My name is Tassia Shibuya, I'm currently a student at the UC
            Berkeley coding bootcamp.
          </p>
          <p>
            I was born in Brazil- Sao Paulo, lived in London, Dublin and Lisbon,
            my last job as an auditor brought me to California, which I feel in
            love with the place and that helped me with my decision to stay.
          </p>
          <p>
            Working with multiple teams and engineers at my previous job made
            want to learn more about codinh. My hunger for knowledge and
            determination to turn information into action has contributed to my
            most recent sucess at UC Berkeley.
          </p>
          <p>
            When not online, I can be found in San Francisco, California with my
            family, jogging, biking, trying out a new recipe in the kitchen,
            experimenting in gardening.
          </p>
          <br />
          <br />
          <br />
          <br />
          <a href="https://github.com/Tassim">
            <Icon name="github" size="big" color="black" link />
          </a>
          <a href="https://www.linkedin.com/in/tassia-shibuya-358b7b24/">
            <Icon name="linkedin" size="big" color="black" link />
          </a>
          <Button color="black" animated floated="right" as={Link} to="/work">
            <Button.Content visible>Projects</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Image src={MyImage} centered />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default HomePage;
