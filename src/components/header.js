import React from "react";
import { css } from "@emotion/react";
import { Link } from 'gatsby';

import { rhythm } from "../utils/typography";

export default function Header({ data }) {
  return (
    <header 
      css={css`
        margin: 3rem auto;
        max-width: 600px;
        padding: ${rhythm(2)}
        padding-top: ${rhythm(1.5)}
    `}>
      <Link to={`/`}>
        <h3
          className="blog-name"
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >{data.site.siteMetadata.title}
        </h3>
      </Link>

      <Link to={`/contact/`}
        css={css`
          float: right;
          color: black;
        `}>
        contact
      </Link>
    </header>
  );
}