import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

const Title = styled.h1`
  color: #637BF3;
`;

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return(
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children} 
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `death grips' blog`,
}