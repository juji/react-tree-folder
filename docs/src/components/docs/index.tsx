'use client'

import { css } from '@emotion/css'
import DocsPage from './docs.mdx'
import './style.css'

export default function Docs(){

  return <div className={css`
    max-width: 800px;
    padding: 0 16px;
    margin: 0 auto;
    line-height: 1.6rem;

    @media screen and (min-width: 1207px){
      width: 1207px;
      display: grid;
      grid-template-columns: 768px 190px;
    }
  `}>
    <DocsPage />
  </div>

}



