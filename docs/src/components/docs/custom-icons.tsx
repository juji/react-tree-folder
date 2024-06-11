import { TreeFolder, type Tree } from 'react-tree-folder/dist/no-icons'
import SvgFileIcon from './svg-file-icon'

const treeFolder:Tree = [
  {
    text: 'open this folder',
    dir: true,
    branch: [{ text: 'this is a file '}]
  }
]

export function CustomIcons(){

  return <TreeFolder 
    tree={treeFolder}
    iconFolder={'📁'}
    iconFolderOpen={'📂'}
    iconFile={<SvgFileIcon />}
  />

}