import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    My name is Nikola Margit, I'm a JavaScript Developer @
    <Styled.a href="https://mqsoft.rs/" target="_blanc">
      MQ Soft
    </Styled.a>
    , this is my blog. You can find me at{" "}
    <Styled.a
      href="https://twitter.com/NikolaMargit"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Twitter
    </Styled.a>{" "}
    and{" "}
    <Styled.a
      href="https://github.com/nikmargit"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Styled.a>
    .
  </Fragment>
)
