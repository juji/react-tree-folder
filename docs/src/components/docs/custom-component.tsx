import { TreeFolder, type Tree } from 'react-tree-folder'
import { TypeAnimation } from 'react-type-animation';

function MyAnimatedText({ text }:{ text: string }){

  return <TypeAnimation
    sequence={[
      'One', // Types 'One'
      1000, // Waits 1s
      'Two', // Deletes 'One' and types 'Two'
      2000, // Waits 2s
      text, // Types text
      3000 // wait 3s
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
  />

}

const treeFolder:Tree = [
  {
    text: 'aFile',
    component: (text) => <MyAnimatedText text={text} />
  },
  {
    text: 'aButtonFile',
    component: (text) => <MyAnimatedText text={text} />,
    onClick: () => alert('Hey, you!')
  },
  {
    text: 'aDir',
    component: (text) => <MyAnimatedText text={text} />,
    dir: true,
    open: true,
    branch: [
      {
        text: 'just a regular file',
      }
    ]
  },
]

export function CustomComponent() {
  return (
    <TreeFolder tree={treeFolder} />
  );
}