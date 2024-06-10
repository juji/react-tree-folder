'use client'

import Link from "next/link";
import styles from "./page.module.css";
import { TreeFolder, type Tree, type Branch } from 'react-tree-folder'
import 'react-tree-folder/dist/style.css'
import { ReactElement, useEffect, useRef, useState } from "react";
import Docs from '@/components/docs'

// text: string | ReactElement
// open?: boolean
// dir?: boolean
// icon?: ReactNode
// branch?: Tree

function AnyComponent({ text }:{ text: string | ReactElement }): ReactElement {

  const [ linkText, setLinkText ] = useState(text)
  const to = useRef<ReturnType <typeof setTimeout>>()
  useEffect(() => {
    if(to.current) clearTimeout(to.current)
    to.current = setTimeout(() => {
      if(linkText === text)
        setLinkText('seriously, any ..!')
      else if(linkText === 'seriously, any ..!')
        setLinkText('well, not any ..')
      else if(linkText === 'well, not any ..')
        setLinkText('but you get the gist')
      else setLinkText(text)
    },3000)
  },[ linkText ])

  return <Link 
    href='https://asdf.com' 
    target="_blank"
    rel="noreferrer noopener"
    style={{...linkText === text?{}: {

      // https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
      color: "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%)'
    }}}
  >{linkText}</Link>

}

const treeFolder:Tree = [
  {
    text: 'default open',
    dir: true,
    open: true,
    branch: [
      {
        text: 'file with default icon'
      },
      {
        text: 'unicode icon',
        icon: '⚽'
      },
      {
        text: 'react element as icon',
        icon: <i style={{color:'orange', marginRight: '5px'}}>Hi</i>
      },
      {
        text: 'onClick handler',
        onClick: () => alert('With onClick handler, this will need to be a client component')
      },
      {
        text: 'any component',
        component: (text) => <AnyComponent text={text} />
        /*
        (
          { text }:
          { text: string | ReactElement }
        ) => ReactElement
        */
      }
    ]
  },
  {
    text: 'empty directory',
    dir: true
  },
  {
    text: 'default close',
    dir: true,
    branch: [
      {
        text: 'subdir',
        dir: true,
        branch: [
          {
            text: 'with content'
          }
        ]
      },
      {
        text: 'file'
      }
    ]
  }
]

export default function Home() {
  return (<>
    <header className={styles.header}>
      <Link href="/">React Tree Folder</Link>
    </header>
    <main className={styles.main}>
      <div className={styles.first}>
        <TreeFolder tree={treeFolder} />
        <a href="#docs" className={styles.docsLink}>Docs</a>
      </div>
      <div id="docs" className={styles.docs}>
        <Docs />
      </div>
    </main>
  </>);
}
