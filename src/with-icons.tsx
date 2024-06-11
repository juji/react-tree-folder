
import { FileIcon, FolderOpen, Folder } from './icons';
import { TreeStructure, type Tree } from './tree';

export type ReactTreeWithIconsProps = {
  tree: Tree 
  color?: string
  hoverColor?: string
  borderColor?: string
  containerClass?: string
}

export function TreeWithIcons({ 
  tree,
  color,
  hoverColor,
  borderColor,
  containerClass,
}:ReactTreeWithIconsProps){

  return <TreeStructure 
    tree={tree}
    containerClass={containerClass}
    iconFolderOpen={<FolderOpen />}
    iconFolder={<Folder />}
    iconFile={<FileIcon />}
    color={color}
    hoverColor={hoverColor}
    borderColor={borderColor}
  />

}
