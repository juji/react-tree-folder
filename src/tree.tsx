'use client'

import styles from './tree.module.css'
import { ReactElement, ReactNode, useState } from 'react'

export type Branch = {
  text: string | ReactElement
  ext: string | undefined
  open?: boolean | undefined | null
  dir?: boolean | undefined | null
  branch?: Tree
}

export type Tree = Branch[]

function BranchLine({ 
  branch,
  pk,
  IconFolderOpen,
  IconFolder,
  IconFile
}:{ 
  branch: Branch 
  pk: string
  IconFolderOpen: () => ReactNode
  IconFolder: () => ReactNode
  IconFile: ({ ext }:{ ext?: string }) => ReactNode
}){

  const [ open, setOpen ] = useState(branch.open)
  const { ext, dir, text, branch: children } = branch

  return <div className={`${styles.line}`}>

    {dir ? <button onClick={() => setOpen(!open)}>
      <span>{ open ? 
        <IconFolderOpen /> :
        <IconFolder />
      }</span>
      <span>{text}</span>
    </button> : <div>
      <span><IconFile ext={ext} /></span>
      <span>{text}</span>
    </div>}

    {children ? <div className={`${open?styles.open:''} ${styles.content}`}>
      <div className={styles.inner}>
      {children.map((v,k) => {
        return <BranchLine 
          IconFolderOpen={IconFolderOpen}
          IconFolder={IconFolder}
          IconFile={IconFile}
          key={`BranchLine${pk}${k}`} 
          branch={v} 
          pk={`${pk}${k}`} />
      })}
      </div>
    </div> : null }

  </div>

}

export function TreeStructure({ 
  tree,
  className,
  IconFolderOpen,
  IconFolder,
  IconFile
}:{ 
  tree: Tree 
  className: string,
  IconFolderOpen: () => ReactNode
  IconFolder: () => ReactNode
  IconFile: ({ ext }:{ ext?: string }) => ReactNode
}){

  return <div className={`${className} ${styles.tree}`}>
    {tree.map((v,k) => <BranchLine 
      IconFolderOpen={IconFolderOpen}
      IconFolder={IconFolder}
      IconFile={IconFile}
      key={`BranchLine${k}`} 
      pk={k+''} 
      branch={v} />)}
  </div>

}