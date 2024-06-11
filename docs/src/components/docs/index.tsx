'use client'

import { MenuButton } from '../menu-button'
import { css } from '@emotion/css'
import DocsPage from './docs.mdx'


export default function Docs(){

  return <div className={css`
    max-width: 800px;
    padding: 0 12px;
    margin: 0 auto;
  `}>
    
    <MenuButton />

    <div className={css`
      padding: 1rem 1rem;
      line-height: 1.6rem;
    `}>
      <DocsPage />
    </div>

  </div>

}



