import { TreeFolder, type Tree } from 'react-tree-folder'

const treeFolder:Tree = [
  {
    text: 'default icon'
  },
  {
    text: 'unicode icon',
    icon: '⚽'
  },
  {
    text: 'react element as icon',
    icon: <i style={{color:'orange', marginRight: '5px'}}>Hi</i>
  },
]

export function CustomFileIcons() {
  return (
    <TreeFolder tree={treeFolder} />
  );
}