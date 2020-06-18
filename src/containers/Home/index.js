import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import MyImage from "../../img/IMG_1199.JPG";
import Logo from "../../img/logo_blue_round.png";
import "./style.css";

function HomePage() {
  return (
    <div>
      <Grid columns={2} stackable>
        <Grid.Column>
          <h1 className='nameTitle'>Tassia Shibuya</h1>
          <p>
          Hello! My name is Tassia Shibuya, I was born in Brazil - Sao Paulo, 
          lived in London, Dublin and Lisbon, my last job as an auditor brought me 
          to California, which I immediately fell in love with and decided to set 
          my roots down.
          </p>
          <p>
          I am a personable and passionate Web Developer with a background in 
          Accounting and Finance and a Full Stack Certificate from the University 
          of California, Berkeley. While earning the Full Stack Certificate I 
          developed skills in Node.js, Axios, Express, SQL, JavaScript, CSS, HTML, 
          React, Redux in order to create meaningful server-side applications. My 
          background in Accounting and Finance has taught me to effectively 
          collaborate in a team setting while solving problems in high-stress 
          environments. I’m an articulate individual who enjoys connecting with 
          co-workers and is passionate about building applications that assist 
          everyday people with everyday life. I look forward to bringing my newly 
          acquired technical coding skills to a company to assist with its growth 
          and success.
          </p>
          <p>
          Working with multiple teams and engineers at my previous job made want 
          to learn more about coding. My hunger for knowledge and determination 
          to turn information into action has contributed to my most recent 
          success in graduating the boot-camp. Throughout the course my desire 
          to dive deeper into the computer program environment continued to build 
          and my confidence in the fact that I found my new passion continued to 
          grow. 
          </p>
          <p>
          When not online, I can be found in San Francisco, California enjoying 
          outdoor activities with my handsome husband and kids such as jogging, 
          biking, or experimenting with gardening. I’m also an aspiring chef and 
          can often be found in the kitchen cooking up a new recipe.
          </p>
          <p>
          Fun fact: I once participated in a Guitar Hero competition and I was 
          the only woman in the semifinals.
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
