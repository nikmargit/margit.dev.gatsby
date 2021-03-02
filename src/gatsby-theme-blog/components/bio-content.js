import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    I'm Nikola Margit, a full-stack JavaScript Developer. I'm a part of the team
    over at{" "}
    <Styled.a href="https://mqsoft.rs/" target="_blanc">
      MQ Soft
    </Styled.a>{" "}
    where I help crafting apps using JavaScript tools. You can find me on{" "}
    <Styled.a
      href="https://twitter.com/NikolaMargit"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Twitter
    </Styled.a>
    ,{" "}
    <Styled.a
      href="https://github.com/nikmargit"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Styled.a>
    , and{" "}
    <Styled.a
      href="https://www.linkedin.com/in/nikolamargit/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </Styled.a>
    .
  </Fragment>
)
