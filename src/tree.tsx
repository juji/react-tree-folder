'use client'

import styles from './tree.module.css'
import { ReactElement, ReactNode, useState } from 'react'

export type Branch = {
  text: string | ReactElement
  open?: boolean
  dir?: boolean
  icon?: ReactNode
  onClick?: () => void
  component?: (text: string | ReactElement) => ReactNode
  branch?: Tree
}

export type Tree = Branch[]

function BranchLine({ 
  branch,
  pk,
  iconFolderOpen,
  iconFolder,
  iconFile
}:{ 
  branch: Branch 
  pk: string
  iconFolderOpen: ReactNode
  iconFolder: ReactNode
  iconFile?: ReactNode
}){

  const [ open, setOpen ] = useState(branch.open)
  const { icon, dir, text, branch: children, onClick, component } = branch

  return <div className={`${styles.line}`}>

    {dir ? <button onClick={() => setOpen(!open)}>
      <span>{ open ? 
        iconFolderOpen :
        iconFolder
      }</span>
      <span>{text}</span>
    </button> : onClick ? <button onClick={onClick}>
      <span>{icon||iconFile||null}</span>
      <span>{text}</span>
    </button> : <div>
      <span>{icon||iconFile||null}</span>
      {component ? component(text) : <span>{text}</span>}
    </div>}

    {children ? <div className={`${open?styles.open:''} ${styles.content}`}>
      <div className={styles.inner}>
      {children.map((v,k) => {
        return <BranchLine 
          iconFolderOpen={iconFolderOpen}
          iconFolder={iconFolder}
          iconFile={iconFile}
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
  iconFolderOpen,
  iconFolder,
  iconFile
}:{ 
  tree: Tree 
  className?: string,
  iconFolderOpen: ReactNode
  iconFolder: ReactNode
  iconFile?: ReactNode
}){

  return <div className={`${className} ${styles.tree}`}>
    {tree.map((v,k) => <BranchLine 
      iconFolderOpen={iconFolderOpen}
      iconFolder={iconFolder}
      iconFile={iconFile}
      key={`BranchLine${k}`} 
      pk={k+''} 
      branch={v} />)}
  </div>

}