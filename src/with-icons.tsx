
import { FileIcon, FolderOpen, Folder } from './icons';
import { TreeStructure, type Tree } from './tree';

export function TreeWithIcons({ 
  tree,
  className,
}:{ 
  tree: Tree 
  className?: string,
}){



  return <TreeStructure 
    tree={tree}
    className={className}
    iconFolderOpen={<FolderOpen />}
    iconFolder={<Folder />}
    iconFile={<FileIcon />}
  />

}
