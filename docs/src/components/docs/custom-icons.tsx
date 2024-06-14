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
  {
    text: 'custom folder icon',
    dir: true,
    folderIcon: {
      closed: '📁',
      open: '📂'
    }
  },
]

export function CustomIcons() {
  return (
    <TreeFolder tree={treeFolder} />
  );
}