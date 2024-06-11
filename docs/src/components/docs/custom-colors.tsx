import { TreeFolder, type Tree } from 'react-tree-folder'

const treeFolder:Tree = [
  {
    text: 'custom color',
    dir: true,
    branch: [{ text: 'content' }],

    // coloring for specific item
    color: 'greenyellow',
    hoverColor: 'lightskyblue',
  },

  {
    text: 'file with custom color',
    color: 'greenyellow',

    // note the hover don't work
    // since this is not a button 
    // (no onClick attribute)
    hoverColor: 'lightskyblue',
  },

  {
    text: 'global color',
    dir: true,
    branch: [{ text: 'content' }],
  },
  {
    text: 'file',
  },

]

export function CustomColors() {
  return (
    <TreeFolder 
      tree={treeFolder} 
      
      // coloring for all item
      color='hotpink'
      hoverColor='yellow'

      // to color the side-line
      borderColor='cyan'


    />
  );
}

