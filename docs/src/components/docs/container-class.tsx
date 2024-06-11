import { TreeFolder, type Tree } from 'react-tree-folder'
import { css } from '@emotion/css'

const borderedBox = css`
  border-radius: 1rem;
  border: 1px solid #42b342;
  padding: 1rem;
`

const treeFolder:Tree = [
  {
    text: 'folder',
    dir: true,
    branch: [{ text: 'content' }]
  },
  {
    text: 'file',
    icon: '🥧'
  },
]

export function ContainerClass() {
  return (
    <TreeFolder 
      tree={treeFolder} 
      containerClass={borderedBox} />
  );
}

