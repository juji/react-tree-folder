import { TreeFolder, type Tree } from 'react-tree-folder'

const tree : Tree = [
  {
    text: 'Some Folder',
    dir: true,

    // a directory may be open by default
    open: true,

    // a directory may contain branch
    branch: [
      {
        text: 'Sub Folder',
        dir: true,
      },
      {
        text: 'Sub File',
      }
    ]
  },
  {
    text: 'Some File',
  }
]

export function SimpleUsageExample(){
  return <TreeFolder tree={tree} />
}