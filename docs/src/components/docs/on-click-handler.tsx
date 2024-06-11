import { TreeFolder, type Tree } from 'react-tree-folder'

const treeFolder:Tree = [
  {
    text: 'on a file',
    onClick: () => alert('Clicked on a file!')
  },
  {
    text: 'on a folder',
    onClick: () => alert('Clicked on a folder!'),
    dir: true,
    branch: [{ text: 'folder content' }]
  }
]

export function OnClickHandler() {
  return (
    <TreeFolder tree={treeFolder} />
  );
}