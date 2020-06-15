import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import Logo from '../../img/logo_blue_round.png';
import './style.css';

export default () => (
  <Menu>
    <Menu.Item>
    <Image src={Logo} size='mini' />
    </Menu.Item>
    <Menu.Menu position="right"> 
      <Menu.Item as={Link} to="/" name="Home" />
      <Menu.Item as={Link} to="/work" name="Projects" />
    </Menu.Menu>
  </Menu>
);
