import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import MyImage from "../../img/IMG_1199.JPG";
import Logo from "../../img/logo_blue_round.png";
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
            Hello! My name is Tassia Shibuya,
            I am a personable and passionate Web Developer with a background in Accounting and Finance 
            with Full Stack Certificate from the University of California, Berkeley. 
            I have honed my skills in Node.js, Axios, Express, SQL, JavaScript, CSS, HTML, React, Redux to develop 
            meaningful server-side applications. I am able to collaborate and work with a team while solving problems 
            in high-stress environments. An articulate individual who enjoys connecting with co-workers and is passionate 
            about building applications that assist everyday people to make their lives easier. 
            Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.
          </p>
          <p>
            I was born in Brazil- Sao Paulo, lived in London, Dublin and Lisbon,
            my last job as an auditor brought me to California, which I fell in
            love with the place and that helped me with my decision to stay.
          </p>
          <p>
            Working with multiple teams and engineers at my previous job made
            want to learn more about coding. My hunger for knowledge and
            determination to turn information into action has contributed to my
            most recent sucess in graduate the boot-camp, throughout as I learned and struggled to digest the fast paced 
            learning curve from the boot-camp, I felt like wanted to dive even deeper into the computer program enviroment. 
          </p>
          <p>
            When not online, I can be found in San Francisco, California with my
            family, jogging, biking, trying out a new recipe in the kitchen or 
            experimenting in gardening.
          </p>
          <p>
          Fun fact: I once participated in a Guitar Hero competition and I was the only woman in the semi finals.
          </p>
          <br />
          <a href="https://github.com/Tassim">
            <Icon name="github" size="big" color="black" link/>
          </a>
          <a href="https://www.linkedin.com/in/tassia-shibuya-358b7b24/">
            <Icon name="linkedin" size="big" color="black" link/>
          </a>
          <a href="https://twitter.com/TassiaShibuya">
            <Icon name="twitter" size="big" color="black" link />
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
