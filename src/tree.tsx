'use client'

import styles from './tree.module.css'
import { ReactNode, useState } from 'react'

export type Branch = {
  text: string
  open?: boolean
  dir?: boolean
  icon?: ReactNode
  onClick?: () => void
  component?: (text: string) => ReactNode
  branch?: Tree
  color?: string
  hoverColor?: string
}

export type Tree = Branch[]

export type ReactTreeFolderProps = { 
  tree: Tree 
  iconFolderOpen: ReactNode
  iconFolder: ReactNode
  iconFile?: ReactNode
  color?: string
  hoverColor?: string
  borderColor?: string
  containerClass?: string
}

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
  const { 
    icon, dir, text, 
    branch: children, 
    onClick, component,
    color,
    hoverColor,
  } = branch

  return <div className={`${styles.line}`}>

    {dir ? <button 
      style={{
        ...hoverColor ? {['--rtrifo-hover-color' as string]: hoverColor}:{},
        ...color ? {['--rtrifo-color' as string]: color}:{}
      }}
      onClick={() => {
        setOpen(!open)
        onClick && onClick()
      }}>
      <span>{ open ? 
        iconFolderOpen :
        iconFolder
      }</span>
      {component ? component(text) : <span>{text}</span>}
    </button> : 
    
    onClick ? <button 
      style={{
        ...hoverColor ? {['--rtrifo-hover-color' as string]: hoverColor}:{},
        ...color ? {['--rtrifo-color' as string]: color}:{}
      }}
      onClick={onClick}>
      <span>{icon||iconFile||null}</span>
      {component ? component(text) : <span>{text}</span>}
    </button> : 
    
    <div style={{
      ...hoverColor ? {['--rtrifo-hover-color' as string]: hoverColor}:{},
      ...color ? {['--rtrifo-color' as string]: color}:{}
    }}>
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
  iconFolderOpen,
  iconFolder,
  iconFile,
  color,
  hoverColor,
  borderColor,
  containerClass,
}:ReactTreeFolderProps){

  return <div style={{
      ...borderColor ? {['--rtrifo-border-color' as string]: borderColor}:{},
      ...hoverColor ? {['--rtrifo-hover-color' as string]: hoverColor}:{},
      ...color ? {['--rtrifo-color' as string]: color}:{}
    }} 
    className={`${containerClass||''} ${styles.tree}`}>
    {tree.map((v,k) => <BranchLine 
      iconFolderOpen={iconFolderOpen}
      iconFolder={iconFolder}
      iconFile={iconFile}
      key={`BranchLine${k}`} 
      pk={k+''} 
      branch={v} />)}
  </div>

}