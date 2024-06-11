import { TreeFolder, type Tree } from 'react-tree-folder'

const treeFolder:Tree = [
  {
    text: 'link',
    link: {
      href: 'https://asdf.com',

      // optional
      newTab: true
    },

    // also optional
    onClick: () => alert('this is a link')
  },
]

export function ALink() {
  return (
    <TreeFolder tree={treeFolder}  />
  );
}

