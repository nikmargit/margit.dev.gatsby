import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
      width: "fit-content",
      margin: "auto",
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby &#10084;
    </Styled.a>
    {` `}&bull;{` `}
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
  </footer>
)
export default Footer
